// Firebase Configuration for SWOLL Premium Authentication
// Using global Firebase SDK (non-modular)

const firebaseConfig = {
  apiKey: "AIzaSyAGV9LoANOsxJ6TEb0NziTDSrxuDsfLuNM",
  authDomain: "swoll-8d2d8.firebaseapp.com",
  projectId: "swoll-8d2d8",
  storageBucket: "swoll-8d2d8.firebasestorage.app",
  messagingSenderId: "437932828106",
  appId: "1:437932828106:web:a019e3ba955d302f4f9b33",
  databaseURL: "https://swoll-8d2d8-default-rtdb.firebaseio.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get auth instance
const auth = firebase.auth();

// Listen for auth state changes
auth.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in
        updateAuthUI(true, user);
        // Set premium mode if authenticated
        localStorage.setItem('isPremium', 'true');
        // Hide ads immediately
        hideAds();
        // Also call updateAdVisibility if available
        if (window.ExerciseTracker && window.ExerciseTracker.updateAdVisibility) {
            window.ExerciseTracker.updateAdVisibility();
        }
    } else {
        // User is signed out
        updateAuthUI(false, null);
        // Show ads immediately
        showAds();
    }
});

// Update auth UI based on sign-in state
function updateAuthUI(isSignedIn, user) {
    // Navbar auth elements
    const authNavbarSignedOut = document.getElementById('auth-signed-out');
    const authNavbarSignedIn = document.getElementById('auth-signed-in');
    const authNavbarUserEmail = document.getElementById('auth-user-email');
    const authUserAvatar = document.getElementById('auth-user-avatar');

    if (isSignedIn && user) {
        if (authNavbarSignedOut) authNavbarSignedOut.style.display = 'none';
        if (authNavbarSignedIn) authNavbarSignedIn.style.display = 'block';
        if (authNavbarUserEmail) authNavbarUserEmail.textContent = user.email;
        // Set user's Google profile photo
        if (authUserAvatar && user.photoURL) {
            authUserAvatar.src = user.photoURL;
        }
    } else {
        if (authNavbarSignedOut) authNavbarSignedOut.style.display = 'block';
        if (authNavbarSignedIn) authNavbarSignedIn.style.display = 'none';
    }
}

// Sign out
function signOut() {
    return auth.signOut();
}

// Helper functions to hide/show ads immediately
function hideAds() {
    const adContainer = document.getElementById('ad-container');
    if (adContainer) {
        adContainer.style.display = 'none';
    }
}

function showAds() {
    const adContainer = document.getElementById('ad-container');
    if (adContainer) {
        adContainer.style.display = 'block';
    }
}

// ============================================
// CLOUD SYNC MODULE - Real-time Firebase sync
// ============================================

window.CloudSync = {
    database: firebase.database(),
    isInitialized: false,
    isPremium: false,
    pendingSyncs: [],
    syncEnabled: false,

    // Initialize cloud sync for authenticated premium users
    init: function(user) {
        if (!user) {
            this.isInitialized = false;
            this.syncEnabled = false;
            return;
        }

        this.isPremium = localStorage.getItem('isPremium') === 'true';
        if (!this.isPremium) {
            console.log('📱 Cloud sync disabled: Free user');
            return;
        }

        this.isInitialized = true;
        this.syncEnabled = true;
        const userId = user.uid;
        const userDataPath = `users/${userId}/data`;

        console.log('☁️ Cloud sync initialized for premium user:', user.email);

        // First: Fetch initial cloud data to populate localStorage
        console.log('☁️ Fetching initial cloud data...');
        this.database.ref(userDataPath).once('value', (snapshot) => {
            const cloudData = snapshot.val();
            if (cloudData) {
                console.log('📥 Initial cloud data fetched');
                
                // Load workout log from cloud
                if (cloudData.workoutLog && Array.isArray(cloudData.workoutLog)) {
                    const localLog = JSON.parse(localStorage.getItem('workoutLog') || '[]');
                    if (JSON.stringify(cloudData.workoutLog) !== JSON.stringify(localLog)) {
                        console.log('📥 Loading workoutLog from cloud');
                        localStorage.setItem('workoutLog', JSON.stringify(cloudData.workoutLog));
                        
                        // Render the updated log
                        if (window.ExerciseTracker && window.ExerciseTracker.renderWorkoutLog) {
                            window.ExerciseTracker.renderWorkoutLog();
                        }
                        
                        // Reload previous values to update input fields
                        if (window.ExerciseTracker && window.ExerciseTracker.loadPreviousWorkoutValues) {
                            console.log('📝 Loading previous workout values from cloud data');
                            window.ExerciseTracker.loadPreviousWorkoutValues();
                        }
                    }
                }
                
                // Load preferences
                if (cloudData.preferences) {
                    if (cloudData.preferences.timerDuration) {
                        localStorage.setItem('timerDuration', cloudData.preferences.timerDuration);
                    }
                }
                
                // Load exercise states
                if (cloudData.exercises) {
                    Object.keys(cloudData.exercises).forEach((key) => {
                        localStorage.setItem(key, JSON.stringify(cloudData.exercises[key]));
                    });
                }
            }
        });

        // Set up real-time listeners for all user data
        this.setupRealtimeListeners(userDataPath);

        // Sync any pending local changes to cloud
        this.syncLocalToCloud(userDataPath);
    },

    // Set up real-time listeners for changes from other devices
    setupRealtimeListeners: function(userDataPath) {
        const self = this;
        let lastWorkoutLogTimestamp = 0;
        let lastPreferencesTimestamp = 0;

        // Listen for workout log changes
        this.database.ref(`${userDataPath}/workoutLog`).on('value', function(snapshot) {
            const cloudData = snapshot.val();
            if (cloudData) {
                const now = Date.now();
                // Debounce: only sync from cloud if it's been more than 2 seconds since last change
                // This prevents the listener from overwriting changes you just made
                if (now - lastWorkoutLogTimestamp > 2000) {
                    const localData = JSON.parse(localStorage.getItem('workoutLog') || '[]');
                    const localStr = JSON.stringify(localData);
                    const cloudStr = JSON.stringify(cloudData);
                    
                    // Only update if data actually changed
                    if (localStr !== cloudStr) {
                        const merged = self.mergeWorkoutData(localData, cloudData);
                        localStorage.setItem('workoutLog', JSON.stringify(merged));
                        
                        // Refresh UI if ExerciseTracker is available
                        if (window.ExerciseTracker && window.ExerciseTracker.renderWorkoutLog) {
                            window.ExerciseTracker.renderWorkoutLog();
                        }
                        
                        // Also reload previous workout values to update the exercise input fields
                        if (window.ExerciseTracker && window.ExerciseTracker.loadPreviousWorkoutValues) {
                            console.log('📝 Reloading previous workout values');
                            window.ExerciseTracker.loadPreviousWorkoutValues();
                        }
                        
                        console.log('🔄 Synced workout log from cloud (changes detected)');
                    }
                } else {
                    console.log('⏸️  Ignoring cloud sync (too soon after local change)');
                }
                lastWorkoutLogTimestamp = now;
            }
        });

        // Listen for preferences changes
        this.database.ref(`${userDataPath}/preferences`).on('value', function(snapshot) {
            const cloudPrefs = snapshot.val();
            if (cloudPrefs) {
                const now = Date.now();
                if (now - lastPreferencesTimestamp > 2000) {
                    const localPrefs = JSON.parse(localStorage.getItem('timerDuration') || '30');
                    
                    if (cloudPrefs.timerDuration !== undefined && cloudPrefs.timerDuration !== localPrefs) {
                        localStorage.setItem('timerDuration', cloudPrefs.timerDuration);
                        console.log('🔄 Synced preferences from cloud');
                    }
                }
                lastPreferencesTimestamp = now;
            }
        });

        // Listen for exercise completion states
        this.database.ref(`${userDataPath}/exercises`).on('value', function(snapshot) {
            const cloudExercises = snapshot.val();
            if (cloudExercises) {
                Object.keys(cloudExercises).forEach(function(key) {
                    localStorage.setItem(key, JSON.stringify(cloudExercises[key]));
                });
                console.log('🔄 Synced exercise states from cloud');
            }
        });
    },

    // Sync local data to cloud
    syncLocalToCloud: function(userDataPath) {
        if (!this.syncEnabled) return;

        try {
            // Sync workout log
            const workoutLog = JSON.parse(localStorage.getItem('workoutLog') || '[]');
            if (workoutLog.length > 0) {
                this.database.ref(`${userDataPath}/workoutLog`).set(workoutLog).catch(error => {
                    console.error('❌ Error syncing workoutLog:', error);
                });
            }

            // Sync preferences (always sync, even if empty)
            const timerDuration = localStorage.getItem('timerDuration') || '30';
            this.database.ref(`${userDataPath}/preferences`).set({
                timerDuration: parseInt(timerDuration),
                lastUpdated: new Date().toISOString()
            }).catch(error => {
                console.error('❌ Error syncing preferences:', error);
            });

            // Sync exercise completion states
            const exercises = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('exercise-')) {
                    try {
                        exercises[key] = JSON.parse(localStorage.getItem(key));
                    } catch (e) {
                        console.warn('Could not parse exercise data for key:', key);
                    }
                }
            }
            if (Object.keys(exercises).length > 0) {
                this.database.ref(`${userDataPath}/exercises`).set(exercises).catch(error => {
                    console.error('❌ Error syncing exercises:', error);
                });
            }

            console.log('☁️ Synced local data to cloud');
        } catch (error) {
            console.error('❌ Error in syncLocalToCloud:', error);
            this.addPendingSync();
        }
    },

    // Queue a sync operation for later (when connection restored)
    addPendingSync: function() {
        const now = Date.now();
        if (!this.pendingSyncs.includes(now)) {
            this.pendingSyncs.push(now);
            localStorage.setItem('pendingSyncs', JSON.stringify(this.pendingSyncs));
        }
    },

    // Merge workout data (simple merge, cloud takes precedence)
    mergeWorkoutData: function(local, cloud) {
        if (!Array.isArray(cloud)) return local;
        
        // Create map of cloud entries by ID for quick lookup
        const cloudMap = new Map();
        cloud.forEach(function(entry) {
            if (entry.id) {
                cloudMap.set(entry.id, entry);
            }
        });

        // Add any local entries not in cloud
        local.forEach(function(entry) {
            if (entry.id && !cloudMap.has(entry.id)) {
                cloudMap.set(entry.id, entry);
            }
        });

        // Return merged array
        return Array.from(cloudMap.values());
    },

    // Save data with automatic cloud sync
    saveWithSync: function(key, data, userDataPath) {
        // Always save locally first
        localStorage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data));
        console.log('💾 Saved locally:', key);

        // Then sync to cloud if enabled
        if (this.syncEnabled && userDataPath) {
            if (key === 'workoutLog') {
                const jsonData = typeof data === 'string' ? JSON.parse(data) : data;
                this.database.ref(`${userDataPath}/workoutLog`).set(jsonData)
                    .then(() => console.log('☁️ Synced workoutLog to cloud'))
                    .catch(error => console.error('❌ Error syncing workoutLog:', error));
            } else if (key === 'timerDuration') {
                this.database.ref(`${userDataPath}/preferences/timerDuration`).set(parseInt(data))
                    .then(() => console.log('☁️ Synced timerDuration to cloud'))
                    .catch(error => console.error('❌ Error syncing timerDuration:', error));
            } else if (key.startsWith('exercise-')) {
                const jsonData = typeof data === 'string' ? JSON.parse(data) : data;
                this.database.ref(`${userDataPath}/exercises/${key}`).set(jsonData)
                    .then(() => console.log('☁️ Synced exercise to cloud:', key))
                    .catch(error => console.error('❌ Error syncing exercise:', error));
            }
        }
    }
};

// Hook into auth state to initialize cloud sync
auth.onAuthStateChanged(function(user) {
    if (user && localStorage.getItem('isPremium') === 'true') {
        console.log('🔐 Auth state changed - user authenticated, initializing cloud sync');
        CloudSync.init(user);
    } else {
        console.log('🔐 Auth state changed - user not authenticated or not premium, disabling cloud sync');
        CloudSync.isInitialized = false;
        CloudSync.syncEnabled = false;
    }
});

// Debug: Log cloud sync status
window.debugCloudSync = function() {
    console.log('=== CLOUD SYNC DEBUG ===');
    console.log('CloudSync.isInitialized:', CloudSync.isInitialized);
    console.log('CloudSync.syncEnabled:', CloudSync.syncEnabled);
    console.log('CloudSync.isPremium:', CloudSync.isPremium);
    console.log('isPremium (localStorage):', localStorage.getItem('isPremium'));
    console.log('Current user:', firebase.auth().currentUser?.email);
    console.log('Workout log:', JSON.parse(localStorage.getItem('workoutLog') || '[]'));
    console.log('========================');
};