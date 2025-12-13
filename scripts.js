// EXERCISE DATA - Add all exercises here
const EXERCISES = [
    {
        id: 'dumbbellfrontsquat',
        name: 'Dumbbell Front Squat',
        targetReps: 12,
        image: 'img/dumbbell_front_squat.jpg',
        gif: 'img/dumbbell_front_squat.gif',
        weight: true
    },
    {
        id: 'deadlift',
        name: 'Romanian Deadlift',
        targetReps: 10,
        image: 'img/barbell_romanian_deadlift.jpg',
        gif: 'img/barbell_romanian_deadlift.gif',
        weight: true
    },
    {
        id: 'bench',
        name: 'Bench Press',
        targetReps: 8,
        image: 'img/barbell_benchpress.jpg',
        gif: 'img/barbell_benchpress.gif',
        weight: true
    },
    {
        id: 'changethishammercurl',
        name: 'Hammer Curl',
        targetReps: 8,
        image: 'img/hammer_curl.jpg',
        gif: 'img/hammer_curl.gif',
        weight: true
    },
    {
        id: 'widegrippushup',
        name: 'Wide Grip Push Up',
        targetReps: 20,
        image: 'img/wide_grip_pushup.jpg',
        gif: 'img/wide_grip_pushup.gif',
        weight: false
    },
    {
        id: 'twistingsitup',
        name: 'Twisting Sit Up',
        targetReps: 20,
        image: 'img/twisting_situp.jpg',
        gif: 'img/twisting_situp.gif',
        weight: false
    },
    {
        id: 'landmineshoulderpress',
        name: 'Landmine Shoulder Press',
        targetReps: 12,
        image: 'img/landmine_shoulder_press.jpg',
        gif: 'img/landmine_shoulder_press.gif',
        weight: true
    },
    {
        id: 'inclinedumbbellpress',
        name: 'Incline Dumbbell Press',
        targetReps: 12,
        image: 'img/incline_dumbbell_press.jpg',
        gif: 'img/incline_dumbbell_press.gif',
        weight: true
    },
    {
        id: 'trxchestfly',
        name: 'TRX Chest Fly',
        targetReps: 15,
        image: 'img/trx_chest_fly.jpg',
        gif: 'img/trx_chest_fly.gif',
        weight: false
    },
    {
        id: 'benchdips',
        name: 'Bench Dips',
        targetReps: '20',
        image: 'img/bench_dips.jpg',
        gif: 'img/bench_dips.gif',
        weight: false
    },
    {
        id: 'barbellbentoverrow',
        name: 'Barbell Bent Over Row',
        targetReps: '12',
        image: 'img/barbell_bent_over_row.jpg',
        gif: 'img/barbell_bent_over_row.gif',
        weight: true
    },
    {
        id: 'trxinvertedrow',
        name: 'TRX Inverted Row',
        targetReps: '15',
        image: 'img/trx_inverted_row.jpg',
        gif: 'img/trx_inverted_row.gif',
        weight: false
    },
    {
        id: 'dumbbellbicepcurl',
        name: 'Dumbbell Bicep Curl',
        targetReps: '12',
        image: 'img/dumbbell_bicep_curl.jpg',
        gif: 'img/dumbbell_bicep_curl.gif',
        weight: true
    },
    {
        id: 'hammercurl',
        name: 'Hammer Curl',
        targetReps: '12',
        image: 'img/hammer_curl.jpg',
        gif: 'img/hammer_curl.gif',
        weight: true
    },
    {
        id: 'resistancebandfacepull',
        name: 'Resistance Band Face Pull',
        targetReps: '15',
        image: 'img/resistance_band_face_pulls.jpg',
        gif: 'img/resistance_band_face_pulls.gif',
        weight: false
    },
    {
        id: 'barbellbacksquat',
        name: 'Barbell Back Squat',
        targetReps: '8',
        image: 'img/barbell_back_squat.jpg',
        gif: 'img/barbell_back_squat.gif',
        weight: true
    },
    {
        id: 'dumbbelwalkinglunges',
        name: 'Dumbbell Walking Lunges',
        targetReps: '12',
        image: 'img/dumbbell_walking_lunges.jpg',
        gif: 'img/dumbbell_walking_lunges.gif',
        weight: true
    },
    {
        id: 'bulgariangobletsplitsquat',
        name: 'Bulgarian Goblet Split Squat',
        targetReps: '12',
        image: 'img/bulgarian_goblet_splitsquat.jpg',
        gif: 'img/bulgarian_goblet_splitsquat.gif',
        weight: true
    },
    {
        id: 'dumbbellbulgariansplitsquat',
        name: 'Dumbbell Bulgarian Split Squat',
        targetReps: '12',
        image: 'img/dumbbell_bulgarian_splitsquat.jpg',
        gif: 'img/dumbbell_bulgarian_splitsquat.gif',
        weight: true
    },
    {
        id: 'gobletsquat',
        name: 'Goblet Squat',
        targetReps: '20',
        image: 'img/goblet_squat.jpg',
        gif: 'img/goblet_squat.gif',
        weight: true
    },
    {
        id: 'hiphingelegcurl',
        name: 'Hip Hinge Leg Curl (with slides)',
        targetReps: '15',
        image: 'img/hip_hinge_leg_curl.jpg',
        gif: 'img/hip_hinge_leg_curl.gif',
        weight: false
    },
    {
        id: 'seatedfrontmilitarypress',
        name: 'Seated Front Military Press',
        targetReps: '8',
        image: 'img/seated_front_military_press.jpg',
        gif: 'img/seated_front_military_press.gif',
        weight: true
    },
        {
        id: 'closegripbenchpress',
        name: 'Close Grip Bench Press',
        targetReps: '8',
        image: 'img/close_grip_bench_press.jpg',
        gif: 'img/close_grip_bench_press.gif',
        weight: true
    },
    {
        id: 'dumbbellbenchpress',
        name: 'Dumbbell Bench Press',
        targetReps: '8',
        image: 'img/dumbbell_bench_press.jpg',
        gif: 'img/dumbbell_bench_press.gif',
        weight: true
    },
    {
        id: 'inclinebarbellbenchpress',
        name: 'Incline Barbell Bench Press',
        targetReps: '8',
        image: 'img/incline_barbell_bench_press.jpg',
        gif: 'img/incline_barbell_bench_press.gif',
        weight: true
    },
    {
        id: 'seateddumbbellshoulderpress',
        name: 'Seated Dumbbell Shoulder Press',
        targetReps: '12',
        image: 'img/seated_dumbbell_shoulder_press.jpg',
        gif: 'img/seated_dumbbell_shoulder_press.gif',
        weight: true
    },
    {
        id: 'trxtriceppress',
        name: 'TRX Tricep Press',
        targetReps: '12',
        image: 'img/trx_tricep_press.jpg',
        gif: 'img/trx_tricep_press.gif',
        weight: false
    },
    {
        id: 'bandedlateralraise',
        name: 'Banded Lateral Raise',
        targetReps: '12',
        image: 'img/banded_lateral_raise.jpg',
        gif: 'img/banded_lateral_raise.gif',
        weight: false
    }
];

// WORKOUT PRESETS - Define different workout routines
const WORKOUT_PRESETS = [
    {
        name: 'Push 1',
        description: 'Chest and Triceps',
        exercises: [3, 3, 3, 3, 7, 7, 7, 8, 8, 8, 9, 5, 9, 5, 9, 5, 10]
    },
    {
        name: 'Push 2',
        description: 'Chest and Triceps',
        exercises: [24, 24, 24, 24, 25, 25, 25, 26, 26, 26, 9, 9, 9, 28, 28, 28, 27, 27, 27]
    },
    {
        name: 'Push 3',
        description: 'Chest and Triceps',
        exercises: [3, 5]
    },
    {
        name: 'Pull 1',
        description: 'Back and Biceps',
        exercises: [11, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 15, 14, 15, 14, 15]
    },
    {
        name: 'Pull 2',
        description: 'Back and Biceps',
        exercises: [11, 11]
    },
    {
        name: 'Pull 3',
        description: 'Back and Biceps',
        exercises: [11, 11, 11, 11, 12, 12, 12, 13, 13]
    },
    {
        name: 'Legs 1',
        description: 'Calfs, Quads, Glutes, Hamstrings',
        exercises: [16, 16, 16, 16, 2, 2, 2, 2, 17, 17, 17, 18, 18, 18, 20, 20, 20, 21, 21, 21]
    },
    {
        name: 'Legs 2',
        description: 'Calfs, Quads, Glutes, Hamstrings',
        exercises: []
    },
    {
        name: 'Legs 3',
        description: 'Calfs, Quads, Glutes, Hamstrings',
        exercises: []
    },
    {
        name: 'Full Body Kettlebell',
        description: 'Full Body Kettlebell Workout',
        videoId: '4stAcpR4pFs'
    },
    {
        name: '10 Minute Abs and Core Workout',
        description: '10 Minute Abs',
        videoId: 'BdhqubW1GJE'
    }
];

// Utility function to wait for Chart.js library to load
function waitForChartJS(callback, maxWait = 30000) {
  const startTime = Date.now();
  
  function check() {
    if (typeof Chart !== 'undefined') {
      callback();
    } else if (Date.now() - startTime < maxWait) {
      // Keep checking every 50ms
      setTimeout(check, 50);
    } else {
      console.error('Chart.js library failed to load after', maxWait, 'ms');
    }
  }
  
  check();
}

// Exercise Tracker Module
console.log('✓ Scripts.js loaded, ExerciseTracker module being created');
const ExerciseTracker = {
    lightboxConfig: {
        captionDelay: 100,
        enableZoom: true,
        captionsData: 'alt',
        animationSpeed: 250,
        history: false,
        showThumbnails: false,
        nav: false
    },
    _lightboxInstance: null,

    init() {
        try {
            this.renderMenu();
        } catch(e) { console.error('ERROR in renderMenu:', e); }
        try {
            // Show workout preset cards by default instead of all exercises
            this.renderWorkoutPresetCards();
        } catch(e) { console.error('ERROR in renderWorkoutPresetCards:', e); }
        try {
            this.initLightbox();
        } catch(e) { console.error('ERROR in initLightbox:', e); }
        try {
            this.updateAdVisibility();
        } catch(e) { console.error('ERROR in updateAdVisibility:', e); }
    },

    // Save data with automatic cloud sync for premium users
    saveData(key, data) {
        const dataStr = typeof data === 'string' ? data : JSON.stringify(data);
        
        // Always save locally first
        localStorage.setItem(key, dataStr);

        // Sync to cloud if premium user with cloud sync enabled
        if (localStorage.getItem('isPremium') === 'true' && window.CloudSync && CloudSync.syncEnabled) {
            const user = firebase.auth().currentUser;
            if (user) {
                const userDataPath = `users/${user.uid}/data`;
                
                // Sync immediately
                try {
                    if (key === 'workoutLog') {
                        const jsonData = JSON.parse(dataStr);
                        CloudSync.database.ref(`${userDataPath}/workoutLog`).set(jsonData)
                            .catch((error) => {
                                console.error('❌ Error syncing workoutLog:', error);
                            });
                    } else if (key === 'timerDuration') {
                        CloudSync.database.ref(`${userDataPath}/preferences/timerDuration`).set(parseInt(dataStr))
                            .catch((error) => {
                                console.error('❌ Error syncing timerDuration:', error);
                            });
                    } else if (key.startsWith('exercise-')) {
                        const jsonData = JSON.parse(dataStr);
                        CloudSync.database.ref(`${userDataPath}/exercises/${key}`).set(jsonData)
                            .catch((error) => {
                                console.error('❌ Error syncing exercise:', error);
                            });
                    }
                } catch (error) {
                    console.error('❌ Error in saveData sync:', error);
                }
            }
        }
    },

    renderMenu() {
        const menu = document.getElementById('workout-menu');
        if (!menu) {
            console.error('ERROR: workout-menu element not found');
            return;
        }
        menu.innerHTML = '';

        // Show workout presets first
        WORKOUT_PRESETS.forEach((preset, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            
            const link = document.createElement('a');
            
            // Determine URL based on workout type
            if (preset.videoId) {
                link.href = `?video=${preset.videoId}`;
            } else {
                const exerciseParams = preset.exercises.join(',');
                link.href = `?e=${exerciseParams}`;
            }
            
            link.style.flex = '1';
            link.style.textDecoration = 'none';
            link.style.color = 'inherit';
            
            // Handle click to update URL and re-render without full page reload
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.history.pushState(null, '', link.href);
                this.renderExercises();
                this.initLightbox();
                this.loadPreviousWorkoutValues();
                this.updateAdVisibility();
                // Close sidebar after selection
                const offcanvas = document.getElementById('workoutSidebar');
                if (offcanvas) {
                    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
                    if (bsOffcanvas) bsOffcanvas.hide();
                }
            });
            
            // Add icon for video workouts
            let iconPrefix = '';
            if (preset.videoId) {
                iconPrefix = '<i class="bi bi-play-btn-fill" style="margin-right: 0.5rem;"></i>';
            }
            
            link.innerHTML = `
                <div><strong>${iconPrefix}${preset.name}</strong></div>
                <small class="text-muted">${preset.description}</small>
            `;
            
            const checkIcon = document.createElement('i');
            checkIcon.className = 'bi bi-check-square';
            checkIcon.style.cursor = 'pointer';
            checkIcon.style.fontSize = '1.25rem';
            checkIcon.style.color = '#6c757d';
            checkIcon.style.marginLeft = '1rem';
            checkIcon.dataset.workoutIndex = index;
            
            checkIcon.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWorkoutComplete(index, checkIcon);
            });
            
            li.appendChild(link);
            li.appendChild(checkIcon);
            menu.appendChild(li);
        });

        // Add "View All" option
        const viewAllLi = document.createElement('li');
        viewAllLi.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        const viewAllLink = document.createElement('a');
        viewAllLink.href = '?';
        viewAllLink.style.flex = '1';
        viewAllLink.style.textDecoration = 'none';
        viewAllLink.style.color = 'inherit';
        viewAllLink.innerHTML = `
            <div><strong>View All</strong></div>
            <small class="text-muted">All exercises</small>
        `;
        
        // Handle click to update URL and re-render without full page reload
        viewAllLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.pushState(null, '', viewAllLink.href);
            this.renderExercises();
            this.initLightbox();
            this.loadPreviousWorkoutValues();
            this.updateAdVisibility();
            // Close sidebar after selection
            const offcanvas = document.getElementById('workoutSidebar');
            if (offcanvas) {
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
                if (bsOffcanvas) bsOffcanvas.hide();
            }
        });
        
        const viewAllCheck = document.createElement('i');
        viewAllCheck.className = 'bi bi-check-square';
        viewAllCheck.style.cursor = 'pointer';
        viewAllCheck.style.fontSize = '1.25rem';
        viewAllCheck.style.color = '#6c757d';
        viewAllCheck.style.marginLeft = '1rem';
        viewAllCheck.dataset.workoutIndex = 'viewall';
        
        viewAllCheck.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWorkoutComplete('viewall', viewAllCheck);
        });
        
        viewAllLi.appendChild(viewAllLink);
        viewAllLi.appendChild(viewAllCheck);
        menu.appendChild(viewAllLi);
        
        // Add logged workouts section (separate from presets)
        const loggedWorkoutsSection = document.createElement('div');
        loggedWorkoutsSection.style.marginTop = '2rem';
        
        // Add "Logged Workouts" heading
        const loggedWorkoutsHeader = document.createElement('h6');
        loggedWorkoutsHeader.style.fontWeight = '600';
        loggedWorkoutsHeader.style.marginBottom = '1rem';
        loggedWorkoutsHeader.style.marginLeft = '1rem';
        loggedWorkoutsHeader.style.marginRight = '1rem';
        loggedWorkoutsHeader.textContent = 'Logged Workouts';
        loggedWorkoutsSection.appendChild(loggedWorkoutsHeader);
        
        // Create logged workouts list
        const loggedList = document.createElement('ul');
        loggedList.className = 'list-group';
        loggedList.style.marginBottom = '1rem';
        loggedList.style.listStyle = 'none'; // Remove bullet points
        loggedList.style.paddingLeft = '0'; // Remove default padding
        
        // Add logged workouts
        const log = JSON.parse(localStorage.getItem('workoutLog') || '[]');
        const recentWorkouts = log.slice().reverse(); // Most recent first
        
        if (recentWorkouts.length === 0) {
            const noWorkoutsLi = document.createElement('li');
            noWorkoutsLi.className = 'list-group-item text-muted';
            noWorkoutsLi.style.fontSize = '0.9rem';
            noWorkoutsLi.textContent = 'No workouts logged yet';
            loggedList.appendChild(noWorkoutsLi);
        } else {
            // Helper to create a workout list item with info and delete icons
            function createSidebarWorkoutLi(workout) {
              const workoutLi = document.createElement('li');
              workoutLi.className = 'list-group-item d-flex justify-content-between align-items-center';
              workoutLi.style.fontSize = '0.9rem';
              workoutLi.style.gap = '0.5rem';
              // Main info
              const infoDiv = document.createElement('div');
              infoDiv.style.flex = '1';
              infoDiv.innerHTML = `<strong>${workout.name}</strong><br/><small style=\"color: #6c757d;\">${workout.date}</small>`;
              // Stars
              const starsDiv = document.createElement('div');
              starsDiv.style.color = '#ffc107';
              starsDiv.style.marginRight = '0.5rem';
              starsDiv.innerHTML = `${'⭐'.repeat(workout.rating || 0)}`;
              // Info icon
              const infoIcon = document.createElement('i');
              infoIcon.className = 'bi bi-info-circle';
              infoIcon.style.cursor = 'pointer';
              infoIcon.style.fontSize = '1.1rem';
              infoIcon.style.color = '#6c757d';
              infoIcon.title = 'View workout details';
              infoIcon.style.marginRight = '0.75rem';
              infoIcon.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showWorkoutHistory(workout.id);
              });
              infoIcon.addEventListener('mouseover', () => { infoIcon.style.color = '#007bff'; });
              infoIcon.addEventListener('mouseout', () => { infoIcon.style.color = '#6c757d'; });
              // Delete icon
              const deleteIcon = document.createElement('i');
              deleteIcon.className = 'bi bi-x-circle';
              deleteIcon.style.cursor = 'pointer';
              deleteIcon.style.fontSize = '1.1rem';
              deleteIcon.style.color = '#6c757d';
              deleteIcon.title = 'Delete workout';
              deleteIcon.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                removeFromLog(workout.id, true); // Pass true to trigger sidebar update
              });
              deleteIcon.addEventListener('mouseover', () => { deleteIcon.style.color = '#dc3545'; });
              deleteIcon.addEventListener('mouseout', () => { deleteIcon.style.color = '#6c757d'; });
              // Layout
              const rightDiv = document.createElement('div');
              rightDiv.style.display = 'flex';
              rightDiv.style.alignItems = 'center';
              rightDiv.appendChild(starsDiv);
              rightDiv.appendChild(infoIcon);
              rightDiv.appendChild(deleteIcon);
              workoutLi.appendChild(infoDiv);
              workoutLi.appendChild(rightDiv);
              // Click on li to view info (not icons)
              workoutLi.addEventListener('click', (e) => {
                if (e.target.closest('i')) return;
                showWorkoutHistory(workout.id);
              });
              return workoutLi;
            }
            // Show first 3 workouts
            const visibleCount = Math.min(3, recentWorkouts.length);
            for (let i = 0; i < visibleCount; i++) {
              const workout = recentWorkouts[i];
              loggedList.appendChild(createSidebarWorkoutLi(workout));
            }
            
            // Add "See More" dropdown if there are more than 3 workouts
            if (recentWorkouts.length > 3) {
              // Create array to hold hidden workout items
              const hiddenWorkoutItems = [];
              
              // Create the "See More" button
              const seeMoreLi = document.createElement('li');
              seeMoreLi.className = 'list-group-item';
              seeMoreLi.style.padding = '0.5rem 1rem';
              const seeMoreBtn = document.createElement('button');
              seeMoreBtn.className = 'btn btn-link btn-sm w-100 text-start';
              seeMoreBtn.style.padding = '0';
              seeMoreBtn.style.color = '#007bff';
              seeMoreBtn.style.border = 'none';
              seeMoreBtn.style.cursor = 'pointer';
              seeMoreBtn.textContent = `See More (${recentWorkouts.length - 3} more)`;
              seeMoreBtn.dataset.expanded = 'false';
              
              seeMoreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const isExpanded = seeMoreBtn.dataset.expanded === 'true';
                // Toggle visibility of all hidden items using classList
                hiddenWorkoutItems.forEach((item) => {
                  if (isExpanded) {
                    item.classList.add('d-none');
                  } else {
                    item.classList.remove('d-none');
                  }
                });
                if (isExpanded) {
                  seeMoreBtn.textContent = `See More (${recentWorkouts.length - 3} more)`;
                  seeMoreBtn.dataset.expanded = 'false';
                } else {
                  seeMoreBtn.textContent = 'See Less';
                  seeMoreBtn.dataset.expanded = 'true';
                }
              });
              
              seeMoreLi.appendChild(seeMoreBtn);
              loggedList.appendChild(seeMoreLi);
              
              // Now add the hidden workout items after the button
              for (let i = 3; i < recentWorkouts.length; i++) {
                const workout = recentWorkouts[i];
                const workoutLi = createSidebarWorkoutLi(workout);
                workoutLi.classList.add('d-none'); // Hidden by default using Bootstrap class
                loggedList.appendChild(workoutLi);
                hiddenWorkoutItems.push(workoutLi);
              }
            }
        }
        
        loggedWorkoutsSection.appendChild(loggedList);
        
        // Append to the logged workouts section in the sidebar
        const loggedWorkoutsContainer = document.getElementById('logged-workouts-section');
        if (loggedWorkoutsContainer) {
            loggedWorkoutsContainer.innerHTML = '';
            loggedWorkoutsContainer.appendChild(loggedWorkoutsSection);
        }
    },

    renderWorkoutPresetCards() {
        const container = document.getElementById('exercise-container');
        if (!container) {
            console.error('❌ exercise-container not found');
            return;
        }
        
        const videoContainer = document.getElementById('video-container');
        if (videoContainer) {
            videoContainer.style.display = 'none';
        }
        
        container.innerHTML = '';
        
        const cardsDiv = document.createElement('div');
        cardsDiv.className = 'row g-3';
        cardsDiv.style.padding = '1rem';
        
        // Create a card for each workout preset
        WORKOUT_PRESETS.forEach((preset, index) => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-12 col-md-6 col-lg-4';
            
            const card = document.createElement('div');
            card.className = 'card h-100 workout-card';
            card.style.cursor = 'pointer';
            card.style.transition = 'transform 0.2s, box-shadow 0.2s';
            
            // Card header with icon
            let cardContent = `
                <div class="card-body">
                    <div style="margin-bottom: 1rem;">
            `;
            
            if (preset.videoId) {
                cardContent += '<i class="bi bi-play-circle-fill" style="font-size: 2rem; color: #007bff;"></i>';
            } else {
                cardContent += '<i class="bi bi-dumbbell" style="font-size: 2rem; color: #6c757d;"></i>';
            }
            
            cardContent += `
                    </div>
                    <h5 class="card-title">${preset.name}</h5>
                    <p class="card-text text-muted">${preset.description}</p>
            `;
            
            // Show exercise count if it's not a video
            if (!preset.videoId && preset.exercises) {
                cardContent += `
                    <small class="text-muted">
                        <i class="bi bi-list"></i> ${preset.exercises.length} exercise${preset.exercises.length !== 1 ? 's' : ''}
                    </small>
                `;
            }
            
            cardContent += `
                </div>
            `;
            
            card.innerHTML = cardContent;
            
            // Click handler to select workout
            card.addEventListener('click', (e) => {
                e.preventDefault();
                let href;
                if (preset.videoId) {
                    href = `?video=${preset.videoId}`;
                } else {
                    href = `?e=${preset.exercises.join(',')}`;
                }
                window.history.pushState(null, '', href);
                this.renderExercises();
                this.initLightbox();
                this.loadPreviousWorkoutValues();
                this.updateAdVisibility();
                
                // Close sidebar after selection
                const offcanvas = document.getElementById('workoutSidebar');
                if (offcanvas) {
                    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
                    if (bsOffcanvas) bsOffcanvas.hide();
                }
            });
            
            // Hover effects
            card.addEventListener('mouseover', () => {
                card.style.transform = 'translateY(-4px)';
                card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseout', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'none';
            });
            
            colDiv.appendChild(card);
            cardsDiv.appendChild(colDiv);
        });
        
        container.appendChild(cardsDiv);
        console.log('✓ Rendered workout preset cards');
        
        // Update the workout title to show default view
        updateWorkoutTitle([]);
    },

    parseExerciseSelection() {
        const raw = window.location.search || '';
        if (!raw || raw.length <= 1) return [];
        const qs = raw.substring(1);
        const parts = qs.split('&').filter(Boolean);
        const values = [];

        parts.forEach(part => {
            if (!part) return;
            if (part.includes('=')) {
                const [k, v] = part.split('=');
                if (k === 'e' && v) {
                    v.split(',').forEach(item => {
                        const val = item.trim();
                        if (/^\d+$/.test(val)) values.push(parseInt(val));
                    });
                }
            } else {
                const token = part.trim();
                if (/^\d+$/.test(token)) values.push(parseInt(token));
            }
        });

        return values;
    },

    renderExercises() {
        const container = document.getElementById('exercise-container');
        container.innerHTML = '';
        const videoContainer = document.getElementById('video-container');
        
        const selection = this.parseExerciseSelection();
        
        // Check if current workout is a video workout
        const currentUrl = window.location.search;
        let currentPreset = null;
        
        if (currentUrl === '?' || !currentUrl) {
            // View All - no video
            videoContainer.style.display = 'none';
        } else {
            // Check if this matches a video preset
            currentPreset = WORKOUT_PRESETS.find(preset => {
                if (!preset.videoId) return false;
                // Video presets are accessed via special parameter or through sidebar
                const urlParams = new URLSearchParams(window.location.search);
                return urlParams.get('video') === preset.videoId;
            });
            
            if (currentPreset && currentPreset.videoId) {
                // Display video workout
                videoContainer.style.display = 'block';
                document.getElementById('workout-video').src = `https://www.youtube.com/embed/${currentPreset.videoId}`;
                updateWorkoutTitle([], currentPreset.name);
                return;
            } else {
                videoContainer.style.display = 'none';
            }
        }
        
        const exercisesToRender = selection.length > 0 
            ? selection.map(idx => EXERCISES[idx - 1]).filter(Boolean)
            : EXERCISES;

        // Update the workout title in the navbar
        updateWorkoutTitle(selection);

        // Track occurrence count for each exercise
        const exerciseOccurrences = {};
        
        exercisesToRender.forEach((exercise, index) => {
            const exerciseNumber = EXERCISES.findIndex(e => e.id === exercise.id) + 1;
            
            // Count which occurrence this is (1st, 2nd, 3rd, etc.)
            if (!exerciseOccurrences[exerciseNumber]) {
                exerciseOccurrences[exerciseNumber] = 0;
            }
            exerciseOccurrences[exerciseNumber]++;
            const occurrenceNumber = exerciseOccurrences[exerciseNumber];
            
            const rowHTML = this.createExerciseRowHTML(exercise, index, exerciseNumber, occurrenceNumber);
            container.insertAdjacentHTML('beforeend', rowHTML);
        });

        // Add log & rate workout row at the end if not viewing all exercises
        if (selection.length > 0) {
            const logRateRowHTML = this.createLogRateRowHTML(selection, exercisesToRender.length);
            container.insertAdjacentHTML('beforeend', logRateRowHTML);
            this.checkAndEnableLogRow();
        }

        this.initExerciseListeners();
    },

    createExerciseRowHTML(exercise, displayIndex, exerciseNumber, occurrenceNumber) {
        const weightColHtml = exercise.weight 
            ? `<div class="col-3 col-sm-4">
                    <input type="number" id="${exercise.id}-weight-${displayIndex}" placeholder="weight..." class="exercise-input">
                </div>`
            : `<div class="col-3 col-sm-4"></div>`;
        
        return `
            <div class="row exercise-row" data-exercise-id="${exercise.id}" data-display-index="${displayIndex}" data-exercise-number="${exerciseNumber}" data-occurrence="${occurrenceNumber}">
                <div class="col-2 d-flex align-items-center">
                    <a href="${exercise.gif}" class="lightbox">
                        <img src="${exercise.image}" class="img-fluid gallery-image w-full h-48 object-cover transition duration-200" alt="${exercise.name}">
                    </a>
                </div>
                <div class="col-10">
                    <div class="row">
                        <div class="col">${exercise.name}: ${exercise.targetReps}
                            <i class="bi bi-graph-up exercise-analytics-icon" style="margin-left: 0.5rem; cursor: pointer; color: #6c757d; font-size: 0.95rem;" data-exercise-id="${exercise.id}" title="View exercise analytics"></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3 col-sm-4">
                            <input type="number" id="${exercise.id}-reps-${displayIndex}" placeholder="reps..." class="exercise-input">
                        </div>
                        ${weightColHtml}
                        <div class="col-2 text-center">
                            <button class="btn btn-primary btn-sm submit-exercise" data-exercise="${exercise.id}" data-display-index="${displayIndex}" data-exercise-number="${exerciseNumber}" data-occurrence="${occurrenceNumber}"><span class="d-none d-sm-inline">Submit </span><i class="bi bi-caret-right"></i></button>
                        </div>
                        <div class="col-4 col-sm-2 text-end">
                            <span id="${exercise.id}-output-${displayIndex}"></span>
                            <i class="bi bi-x-circle clear-exercise" data-exercise="${exercise.id}" data-display-index="${displayIndex}" data-exercise-number="${exerciseNumber}" data-occurrence="${occurrenceNumber}" title="Clear exercise"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    createLogRateRowHTML(selection, exerciseCount) {
        return `
            <div class="row exercise-row log-rate-row" style="background-color: #f0f8f4; margin-top: 0; padding: 1rem; border-top: 1px solid #dee2e6;" data-exercise-count="${exerciseCount}">
                <div class="col-10">
                    <div class="row align-items-center">
                        <div class="col-auto" style="padding-right: 0;">
                            <strong style="font-size: 0.9rem; color: #999;">Complete all exercises to log</strong>
                        </div>
                        <div class="col-auto log-rating-stars" style="display: flex; gap: 0.25rem; padding: 0 0.5rem; opacity: 0.5; pointer-events: none;">
                            <i class="bi bi-star log-rate-star" data-rating="1" style="cursor: not-allowed; font-size: 1.2rem; color: #ccc; transition: all 0.1s;"></i>
                            <i class="bi bi-star log-rate-star" data-rating="2" style="cursor: not-allowed; font-size: 1.2rem; color: #ccc; transition: all 0.1s;"></i>
                            <i class="bi bi-star log-rate-star" data-rating="3" style="cursor: not-allowed; font-size: 1.2rem; color: #ccc; transition: all 0.1s;"></i>
                            <i class="bi bi-star log-rate-star" data-rating="4" style="cursor: not-allowed; font-size: 1.2rem; color: #ccc; transition: all 0.1s;"></i>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-success btn-sm log-workout-confirm" style="padding: 0.25rem 0.75rem;" disabled><i class="bi bi-check"></i> Log</button>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-secondary btn-sm log-workout-cancel" style="padding: 0.25rem 0.75rem; display: none;"><i class="bi bi-x"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-2 d-flex align-items-center justify-content-end">
                    <i class="bi bi-check-circle log-complete-icon" style="font-size: 1.5rem; color: #ddd; transition: all 0.3s;"></i>
                </div>
            </div>
        `;
    },

    initExerciseListeners() {
        document.querySelectorAll('.submit-exercise').forEach(button => {
            button.addEventListener('click', (e) => {
                // Get the button element (in case user clicks on the icon or span inside)
                const btn = e.target.closest('.submit-exercise');
                const exercise = btn.getAttribute('data-exercise');
                const displayIndex = btn.getAttribute('data-display-index');
                const exerciseNumber = btn.getAttribute('data-exercise-number');
                const occurrenceNumber = btn.getAttribute('data-occurrence');
                this.updateExercise(exercise, displayIndex, exerciseNumber, occurrenceNumber);
            });
        });

        document.querySelectorAll('.clear-exercise').forEach(icon => {
            icon.addEventListener('click', (e) => {
                const exercise = e.target.getAttribute('data-exercise');
                const displayIndex = e.target.getAttribute('data-display-index');
                const exerciseNumber = e.target.getAttribute('data-exercise-number');
                const occurrenceNumber = e.target.getAttribute('data-occurrence');
                this.clearExercise(exercise, displayIndex, exerciseNumber, occurrenceNumber);
            });
        });

        // Exercise analytics icons in workout view
        document.querySelectorAll('.exercise-analytics-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const exerciseId = e.target.getAttribute('data-exercise-id');
                showExerciseAnalytics(exerciseId);
            });
            
            icon.addEventListener('mouseover', () => {
                icon.style.color = '#007bff';
            });
            
            icon.addEventListener('mouseout', () => {
                icon.style.color = '#6c757d';
            });
        });

        // Inline log & rate row interactions
        document.querySelectorAll('.log-rate-star').forEach(star => {
            const starsContainer = star.closest('.log-rating-stars');
            const logRow = starsContainer.closest('.log-rate-row');
            
            star.addEventListener('mouseover', (e) => {
                const rating = parseInt(e.target.getAttribute('data-rating'));
                starsContainer.querySelectorAll('.log-rate-star').forEach((s, idx) => {
                    if (idx < rating) {
                        s.classList.remove('bi-star');
                        s.classList.add('bi-star-fill');
                        s.style.color = '#ffc107';
                    } else {
                        s.classList.remove('bi-star-fill');
                        s.classList.add('bi-star');
                        s.style.color = '#999';
                    }
                });
            });

            star.addEventListener('click', (e) => {
                const rating = parseInt(e.target.getAttribute('data-rating'));
                starsContainer.setAttribute('data-selected-rating', rating);
                starsContainer.querySelectorAll('.log-rate-star').forEach((s, idx) => {
                    if (idx < rating) {
                        s.classList.remove('bi-star');
                        s.classList.add('bi-star-fill');
                        s.style.color = '#ffc107';
                    } else {
                        s.classList.remove('bi-star-fill');
                        s.classList.add('bi-star');
                        s.style.color = '#999';
                    }
                });
            });

            starsContainer.addEventListener('mouseout', () => {
                const selectedRating = parseInt(starsContainer.getAttribute('data-selected-rating') || '0');
                starsContainer.querySelectorAll('.log-rate-star').forEach((s, idx) => {
                    if (idx < selectedRating) {
                        s.classList.remove('bi-star');
                        s.classList.add('bi-star-fill');
                        s.style.color = '#ffc107';
                    } else {
                        s.classList.remove('bi-star-fill');
                        s.classList.add('bi-star');
                        s.style.color = '#999';
                    }
                });
            });
        });

        document.querySelectorAll('.log-workout-confirm').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const ratingRow = e.target.closest('[class*="exercise-row"]');
                if (!ratingRow.classList.contains('enabled')) return;
                
                const starsContainer = ratingRow.querySelector('.log-rating-stars');
                const selectedRating = parseInt(starsContainer.getAttribute('data-selected-rating') || '0');
                
                this.logAndRateWorkout(selectedRating);
            });
        });

        document.querySelectorAll('.log-workout-cancel').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const ratingRow = e.target.closest('[class*="exercise-row"]');
                const starsContainer = ratingRow.querySelector('.log-rating-stars');
                starsContainer.setAttribute('data-selected-rating', '0');
                starsContainer.querySelectorAll('.log-rate-star').forEach(s => {
                    s.classList.remove('bi-star-fill');
                    s.classList.add('bi-star');
                    s.style.color = '#ddd';
                });
            });
        });
    },

    initLightbox() {
        // Simple click handler for lightbox images - no SimpleLightbox library issues
        document.querySelectorAll('a.lightbox').forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const gifUrl = link.getAttribute('href');
                const altText = link.querySelector('img')?.getAttribute('alt') || 'Exercise';
                
                // Create overlay and modal
                const overlay = document.createElement('div');
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    cursor: pointer;
                `;
                
                const img = document.createElement('img');
                img.src = gifUrl;
                img.alt = altText;
                img.style.cssText = `
                    max-width: 90%;
                    max-height: 90%;
                    object-fit: contain;
                    cursor: zoom-out;
                `;
                
                // Close on click
                overlay.addEventListener('click', () => {
                    document.body.removeChild(overlay);
                });
                
                // Also allow ESC key to close
                const closeHandler = (e) => {
                    if (e.key === 'Escape') {
                        document.body.removeChild(overlay);
                        document.removeEventListener('keydown', closeHandler);
                    }
                };
                document.addEventListener('keydown', closeHandler);
                
                overlay.appendChild(img);
                document.body.appendChild(overlay);
            });
        });
    },

    updateExercise(exerciseId, displayIndex, exerciseNumber, occurrenceNumber) {
        const repsInput = document.getElementById(`${exerciseId}-reps-${displayIndex}`);
        const weightInput = document.getElementById(`${exerciseId}-weight-${displayIndex}`);
        const exercise = EXERCISES.find(e => e.id === exerciseId);
        
        const reps = repsInput.value;
        const weight = weightInput ? weightInput.value : '';
        
        // If exercise requires weight, check both reps and weight
        // If exercise doesn't require weight, only check reps
        const isValid = exercise.weight ? (reps && weight) : reps;
        
        if (isValid) {
            const output = weight ? `${reps} x ${weight}` : reps;
            document.getElementById(`${exerciseId}-output-${displayIndex}`).textContent = output;
            this.saveExercise(exerciseId, exerciseNumber, occurrenceNumber, reps, weight);
            
            const exerciseRow = repsInput.closest('.exercise-row');
            exerciseRow.classList.add('exercise-complete');

            repsInput.value = '';
            if (weightInput) {
                weightInput.value = '';
            }
            
            // Check if all exercises are complete
            this.checkAndEnableLogRow();
        }
    },

    clearExercise(exerciseId, displayIndex, exerciseNumber, occurrenceNumber) {
        // Use both exerciseNumber and occurrenceNumber to create unique key
        localStorage.removeItem(`exercise-${exerciseNumber}-occurrence-${occurrenceNumber}`);
        
        const exerciseRow = document.querySelector(`[data-exercise-id="${exerciseId}"][data-display-index="${displayIndex}"]`);
        exerciseRow.classList.remove('exercise-complete');
        
        document.getElementById(`${exerciseId}-output-${displayIndex}`).textContent = '';
        document.getElementById(`${exerciseId}-reps-${displayIndex}`).value = '';
        
        const weightInput = document.getElementById(`${exerciseId}-weight-${displayIndex}`);
        if (weightInput) {
            weightInput.value = '';
        }
        
        // Check if all exercises are complete
        this.checkAndEnableLogRow();
    },

    checkAndEnableLogRow() {
        const logRow = document.querySelector('.log-rate-row');
        if (!logRow) return;
        
        const exerciseCount = parseInt(logRow.getAttribute('data-exercise-count'));
        const completedExercises = document.querySelectorAll('.exercise-row.exercise-complete:not(.log-rate-row)').length;
        
        console.log(`Checking log row: ${completedExercises}/${exerciseCount} exercises complete`);
        
        if (completedExercises >= exerciseCount) {
            // Enable the log row
            logRow.classList.add('enabled');
            logRow.style.opacity = '1';
            logRow.querySelector('.log-rating-stars').style.opacity = '1';
            logRow.querySelector('.log-rating-stars').style.pointerEvents = 'auto';
            logRow.querySelectorAll('.log-rate-star').forEach(star => {
                star.style.cursor = 'pointer';
                star.style.color = '#ccc';
            });
            logRow.querySelector('.log-workout-confirm').disabled = false;
            logRow.querySelector('.log-workout-confirm').style.opacity = '1';
            logRow.querySelector('.log-complete-icon').style.color = '#ddd';
        } else {
            // Disable the log row visually but keep stars interactive
            logRow.classList.remove('enabled');
            logRow.style.opacity = '0.6';
            logRow.querySelector('.log-rating-stars').style.opacity = '0.6';
            logRow.querySelector('.log-rating-stars').style.pointerEvents = 'auto';
            logRow.querySelectorAll('.log-rate-star').forEach(star => {
                star.style.cursor = 'pointer';
                star.style.color = '#ccc';
            });
            logRow.querySelector('.log-workout-confirm').disabled = true;
            logRow.querySelector('.log-workout-confirm').style.opacity = '0.5';
            logRow.querySelector('.log-complete-icon').style.color = '#ddd';
        }
    },

    saveExercise(exerciseId, exerciseNumber, occurrenceNumber, reps, weight) {
        // Use both exerciseNumber and occurrenceNumber for unique storage
        localStorage.setItem(`exercise-${exerciseNumber}-occurrence-${occurrenceNumber}`, JSON.stringify([reps, weight]));
    },

    loadPreviousWorkoutValues() {
        // Load values from the most recent logged workout that matches current selection
        const log = JSON.parse(localStorage.getItem('workoutLog') || '[]');
        if (log.length === 0) return;
        
        // Get most recent logged workout
        const lastWorkout = log[log.length - 1];
        if (!lastWorkout.exercises) return;
        
        // Create a map of exercises by ID for quick lookup
        const exerciseMap = {};
        lastWorkout.exercises.forEach(ex => {
            if (!exerciseMap[ex.exerciseId]) {
                exerciseMap[ex.exerciseId] = [];
            }
            exerciseMap[ex.exerciseId].push(ex.repsOutput);
        });
        
        // For each exercise in current view, find matching one from previous workout
        let exerciseIndexByIdMap = {};
        
        document.querySelectorAll('.exercise-row').forEach(row => {
            const exerciseId = row.getAttribute('data-exercise-id');
            const displayIndex = row.getAttribute('data-display-index');
            
            // Track which occurrence of this exercise we're on
            if (!exerciseIndexByIdMap[exerciseId]) {
                exerciseIndexByIdMap[exerciseId] = 0;
            }
            
            // Get the corresponding value from previous workout
            if (exerciseMap[exerciseId] && exerciseIndexByIdMap[exerciseId] < exerciseMap[exerciseId].length) {
                const previousValue = exerciseMap[exerciseId][exerciseIndexByIdMap[exerciseId]];
                document.getElementById(`${exerciseId}-output-${displayIndex}`).textContent = previousValue;
                exerciseIndexByIdMap[exerciseId]++;
            }
        });
    },

    loadSavedValues() {
        // Legacy function - no longer used, kept for backward compatibility
        // Now loading from logged workout entries instead of temporary localStorage
    },

    updateAdVisibility() {
        const isPremium = localStorage.getItem('isPremium') === 'true';
        const adContainer = document.getElementById('ad-container');
        
        if (!adContainer) return;
        
        if (isPremium) {
            // Premium users: hide ads
            adContainer.style.display = 'none';
        } else {
            // Free users: show ads
            adContainer.style.display = 'block';
        }
    },

    logAndRateWorkout(rating) {
        const selection = this.parseExerciseSelection();
        let workoutName = null;

        // Find the matching workout name
        WORKOUT_PRESETS.forEach(preset => {
            if (preset.exercises && JSON.stringify(preset.exercises.slice().sort((a, b) => a - b)) === 
                JSON.stringify(selection.slice().sort((a, b) => a - b))) {
                workoutName = preset.name;
            }
        });

        if (!workoutName) {
            workoutName = `Workout (${selection.length} exercise${selection.length !== 1 ? 's' : ''})`;
        }

        const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

        // PHASE 1: Collect exercise details with each logged workout
        const exerciseDetails = [];
        document.querySelectorAll('.exercise-row.exercise-complete:not(.log-rate-row)').forEach(row => {
            const exerciseId = row.getAttribute('data-exercise-id');
            const exercise = EXERCISES.find(e => e.id === exerciseId);
            const displayIndex = row.getAttribute('data-display-index');
            const outputElement = document.getElementById(`${exerciseId}-output-${displayIndex}`);
            const repsOutput = outputElement?.textContent || '';
            
            if (repsOutput && exercise) {
                exerciseDetails.push({
                    name: exercise.name,
                    exerciseId: exercise.id,
                    repsOutput: repsOutput,
                    targetReps: exercise.targetReps,
                    timestamp: Date.now()
                });
            }
        });

        // Log the workout with rating AND exercise details
        const log = JSON.parse(localStorage.getItem('workoutLog') || '[]');
        log.push({
            id: Date.now(),
            name: workoutName,
            date: today,
            rating: rating,
            exercises: exerciseDetails  // Phase 1: Store exercise details
        });
        this.saveData('workoutLog', log);
        
        // Update the sidebar menu to show the new logged workout
        ExerciseTracker.renderMenu();

        // Show success feedback - fill the checkmark
        const logRow = document.querySelector('.log-rate-row');
        if (logRow) {
            const checkIcon = logRow.querySelector('.log-complete-icon');
            checkIcon.classList.remove('bi-check-circle');
            checkIcon.classList.add('bi-check-circle-fill');
            checkIcon.style.color = '#28a745';
            
            // Disable the row
            logRow.classList.remove('enabled');
            logRow.querySelector('.log-rating-stars').style.opacity = '0.3';
            logRow.querySelector('.log-rating-stars').style.pointerEvents = 'none';
            logRow.querySelector('.log-workout-confirm').disabled = true;
            logRow.querySelector('.log-workout-confirm').style.opacity = '0.5';
            
            // Trigger fireworks celebration
            if (window.startFireworks) {
                window.startFireworks();
            }
        }
    }
};


// TIMER NAVBAR FUNCTIONALITY
const navbar   = document.getElementById('timerNavbar');
const timerBtn = document.getElementById('timerBtn');
const icon     = document.getElementById('stopwatchIcon');
let active = false, tid = null, startTime = 0;
let audioCtx = null;

// Timer duration (in milliseconds) - load from localStorage or default to 30 seconds
let timerDuration = parseInt(localStorage.getItem('timerDuration') || '30') * 1000;

// Function to highlight the selected timer duration in the menu
function updateTimerMenuHighlight() {
  const currentDuration = timerDuration / 1000;
  document.querySelectorAll('.timer-duration-option').forEach(option => {
    const duration = parseInt(option.getAttribute('data-duration'));
    if (duration === currentDuration) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
}

// Initialize timer duration options
document.querySelectorAll('.timer-duration-option').forEach(option => {
  option.addEventListener('click', (e) => {
    e.preventDefault();
    const duration = parseInt(e.target.getAttribute('data-duration'));
    timerDuration = duration * 1000;
    this.saveData('timerDuration', duration);
    updateTimerMenuHighlight();
  });
});

// Highlight the selected duration on page load
updateTimerMenuHighlight();

// Initialize audio context on first user interaction (mobile compatibility)
function initAudioContext() {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    } catch (e) {
      console.log('Audio context initialization failed:', e);
    }
  }
}

document.addEventListener('click', initAudioContext, { once: true });
document.addEventListener('touchstart', initAudioContext, { once: true });

// Only start timer on stopwatch icon click, not on dropdown toggle
document.getElementById('stopwatchIcon').addEventListener('click', (e) => {
  e.stopPropagation();
  initAudioContext();
  if (active) reset(); else start();
});

function start() {
    active = true;
    startTime = Date.now();
    navbar.classList.add('active');
    icon.classList.replace('bi-stopwatch', 'bi-stopwatch-fill');
    icon.classList.add('stopwatch-active');

    // Set dynamic animation duration based on timerDuration
    const durationSeconds = timerDuration / 1000;
    navbar.style.setProperty('--animation-duration', `${durationSeconds}s`);

    // Play a quiet beep immediately (during user action for mobile audio permission)
    playBeepSound();

    void navbar.offsetWidth;
    tid = setTimeout(reset, timerDuration);
}

function reset() {
  clearTimeout(tid);
  const finishedNaturally = active && Date.now() >= startTime + timerDuration;

  active = false;
  navbar.classList.remove('active');
  icon.classList.replace('bi-stopwatch-fill', 'bi-stopwatch');
  icon.classList.remove('stopwatch-active');

  if (finishedNaturally) {
    playBeep();
  }
}

function playBeep() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    // Always ensure the context is resumed before playing
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().then(() => {
        playBeepSound();
      }).catch(err => {
        console.log('Audio context resume failed:', err);
        playBeepFallback(); // Fallback if Web Audio API fails
      });
    } else {
      playBeepSound();
    }
  } catch (e) {
    console.log('Audio context error:', e);
    playBeepFallback(); // Fallback if Web Audio API fails
  }
}

function playBeepSound() {
  try {
    if (audioCtx.state !== 'running' && audioCtx.state !== 'suspended') {
      playBeepFallback();
      return;
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.frequency.value = 800; // Higher pitch for better mobile perception
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);

    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.3);
  } catch (e) {
    console.log('Beep playback error:', e);
    playBeepFallback();
  }
}

// Fallback audio method using oscillator with better mobile support
function playBeepFallback() {
  try {
    // Try HTML5 Audio API with data URL
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(audioContext.destination);
    
    osc.frequency.setValueAtTime(800, now);
    osc.type = 'sine';
    
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    
    osc.start(now);
    osc.stop(now + 0.3);
  } catch (e) {
    console.log('Fallback audio failed:', e);
  }
}

// Workout completion tracking
function toggleWorkoutComplete(workoutIndex, checkIcon) {
  const workoutName = WORKOUT_PRESETS[workoutIndex]?.name || (workoutIndex === 'viewall' ? 'View All' : 'Unknown');
  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  
  // Flash the icon green
  checkIcon.classList.remove('bi-check-square');
  checkIcon.classList.add('bi-check-square-fill');
  checkIcon.style.color = '#28a745';
  
  // Reset after 500ms
  setTimeout(() => {
    checkIcon.classList.remove('bi-check-square-fill');
    checkIcon.classList.add('bi-check-square');
    checkIcon.style.color = '#6c757d';
  }, 500);
  
  // Add to log
  addToLog(workoutName, today);
}

function addToLog(workoutName, date) {
  // Get existing log
  let log = JSON.parse(localStorage.getItem('workoutLog') || '[]');
  
  // Add new entry
  log.push({
    id: Date.now(),
    name: workoutName,
    date: date,
    rating: 0
  });
  
  // Save to localStorage and cloud if premium
  ExerciseTracker.saveData('workoutLog', log);
  
  // Update the sidebar menu to show the new logged workout
  ExerciseTracker.renderMenu();
}

function removeFromLog(logId, updateSidebar = true) {
  // Show confirmation alert using Bootstrap modal
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-warning alert-dismissible fade show';
  alertDiv.setAttribute('role', 'alert');
  alertDiv.style.cssText = 'position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 10000; min-width: 300px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);';
  
  alertDiv.innerHTML = `
    <strong>Delete Workout?</strong>
    <div style="margin-top: 0.75rem;">
      <button type="button" class="btn btn-sm btn-danger" id="confirm-delete">Delete</button>
      <button type="button" class="btn btn-sm btn-secondary" id="cancel-delete">Cancel</button>
    </div>
  `;
  
  document.body.appendChild(alertDiv);
  
  document.getElementById('confirm-delete').addEventListener('click', () => {
    // Get existing log
    let log = JSON.parse(localStorage.getItem('workoutLog') || '[]');
    
    // Remove the entry
    log = log.filter(entry => entry.id !== logId);
    
    // Save to localStorage and cloud if premium
    ExerciseTracker.saveData('workoutLog', log);
    
    // Only update sidebar (don't render main log which is for history view only)
    ExerciseTracker.renderMenu();
    
    // Remove alert
    document.body.removeChild(alertDiv);
  });
  
  document.getElementById('cancel-delete').addEventListener('click', () => {
    document.body.removeChild(alertDiv);
  });
}

function renderWorkoutLog() {
  const logContainer = document.getElementById('workout-log');
  
  // Guard: if element doesn't exist yet, skip rendering
  if (!logContainer) {
    console.warn('⚠ workout-log element not found, skipping renderWorkoutLog()');
    return;
  }
  
  const log = JSON.parse(localStorage.getItem('workoutLog') || '[]');
  
  logContainer.innerHTML = '';
  
  if (log.length === 0) {
    logContainer.innerHTML = '<li class="list-group-item text-muted">No workouts logged</li>';
    return;
  }
  
  // Show in reverse order (most recent first)
  log.reverse().forEach(entry => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    
    const textDiv = document.createElement('div');
    textDiv.style.flex = '1';
    textDiv.innerHTML = `
      <div><strong>${entry.name}</strong></div>
      <small class="text-muted">${entry.date}</small>
    `;
    
    // Star rating container
    const ratingDiv = document.createElement('div');
    ratingDiv.style.display = 'flex';
    ratingDiv.style.gap = '0.25rem';
    ratingDiv.style.margin = '0 1rem';
    
    // Create 4 star icons
    for (let i = 1; i <= 4; i++) {
      const star = document.createElement('i');
      star.className = entry.rating >= i ? 'bi bi-star-fill' : 'bi bi-star';
      star.style.cursor = 'pointer';
      star.style.fontSize = '1rem';
      star.style.color = entry.rating >= i ? '#ffc107' : '#6c757d';
      star.dataset.rating = i;
      star.dataset.logId = entry.id;
      
      star.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateWorkoutRating(entry.id, i);
      });
      
      star.addEventListener('mouseover', () => {
        // Preview stars on hover
        for (let j = 1; j <= 4; j++) {
          const starElements = ratingDiv.querySelectorAll('[data-log-id="' + entry.id + '"]');
          starElements.forEach(s => {
            if (parseInt(s.dataset.rating) <= i) {
              s.style.color = '#ffc107';
              s.classList.remove('bi-star');
              s.classList.add('bi-star-fill');
            } else {
              s.style.color = '#6c757d';
              s.classList.remove('bi-star-fill');
              s.classList.add('bi-star');
            }
          });
        }
      });
      
      star.addEventListener('mouseout', () => {
        // Restore actual rating on mouse out
        for (let j = 1; j <= 4; j++) {
          const starElements = ratingDiv.querySelectorAll('[data-log-id="' + entry.id + '"]');
          starElements.forEach(s => {
            if (entry.rating >= parseInt(s.dataset.rating)) {
              s.style.color = '#ffc107';
              s.classList.remove('bi-star');
              s.classList.add('bi-star-fill');
            } else {
              s.style.color = '#6c757d';
              s.classList.remove('bi-star-fill');
              s.classList.add('bi-star');
            }
          });
        }
      });
      
      ratingDiv.appendChild(star);
    }
    
    // Info icon to view history
    const infoIcon = document.createElement('i');
    infoIcon.className = 'bi bi-info-circle';
    infoIcon.style.cursor = 'pointer';
    infoIcon.style.fontSize = '1.25rem';
    infoIcon.style.color = '#6c757d';
    infoIcon.style.marginRight = '0.5rem';
    infoIcon.title = 'Click to view workout details';
    
    infoIcon.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showWorkoutHistory(entry.id);
    });
    
    infoIcon.addEventListener('mouseover', () => {
      infoIcon.style.color = '#007bff';
    });
    
    infoIcon.addEventListener('mouseout', () => {
      infoIcon.style.color = '#6c757d';
    });
    
    const removeIcon = document.createElement('i');
    removeIcon.className = 'bi bi-x-circle';
    removeIcon.style.cursor = 'pointer';
    removeIcon.style.fontSize = '1.25rem';
    removeIcon.style.color = '#6c757d';
    
    removeIcon.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      removeFromLog(entry.id);
    });
    
    removeIcon.addEventListener('mouseover', () => {
      removeIcon.style.color = '#dc3545';
    });
    
    removeIcon.addEventListener('mouseout', () => {
      removeIcon.style.color = '#6c757d';
    });
    
    // PHASE 2: Add click handler to view workout details
    li.style.cursor = 'pointer';
    li.style.transition = 'background-color 0.2s';
    li.addEventListener('click', (e) => {
      if (e.target.closest('i')) return; // Don't open if clicking icons
      showWorkoutHistory(entry.id);
    });
    
    li.addEventListener('mouseover', () => {
      li.style.backgroundColor = '#f8f9fa';
    });
    
    li.addEventListener('mouseout', () => {
      li.style.backgroundColor = 'transparent';
    });
    
    li.appendChild(textDiv);
    li.appendChild(ratingDiv);
    li.appendChild(infoIcon);
    li.appendChild(removeIcon);
    logContainer.appendChild(li);
  });
}

function updateWorkoutRating(logId, rating) {
  let log = JSON.parse(localStorage.getItem('workoutLog') || '[]');
  
  const entry = log.find(e => e.id === logId);
  if (entry) {
    entry.rating = rating;
    ExerciseTracker.saveData('workoutLog', log);
    // Update the sidebar menu
    ExerciseTracker.renderMenu();
  }
}

function restoreWorkoutStates() {
  // Sidebar rendering is handled by renderMenu()
}

// Video workout logging
function logVideoWorkout(workoutName) {
  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  addToLog(workoutName, today);
}

function updateWorkoutTitle(selection, videoName = null) {
  const titleSpan = document.getElementById('workoutTitle');
  
  if (videoName) {
    titleSpan.textContent = videoName;
    return;
  }
  
  if (selection.length === 0) {
    // No specific workout selected, show all exercises
    titleSpan.textContent = '';
    return;
  }
  
  // Find matching workout preset
  let workoutName = null;
  
  WORKOUT_PRESETS.forEach(preset => {
    // Only check exercise presets (skip video presets)
    if (preset.exercises && JSON.stringify(preset.exercises.sort((a, b) => a - b)) === 
        JSON.stringify(selection.slice().sort((a, b) => a - b))) {
      workoutName = preset.name;
    }
  });
  
  // If no preset matches, show the exercise count or indices
  if (!workoutName) {
    workoutName = `Workout (${selection.length} exercise${selection.length !== 1 ? 's' : ''})`;
  }
  
  titleSpan.textContent = workoutName;
}

// PHASE 2: Show workout history with exercise details
function showWorkoutHistory(logId) {
  const log = JSON.parse(localStorage.getItem('workoutLog') || '[]');
  const entry = log.find(e => e.id === logId);
  
  if (!entry) return;
  
  // Create modal HTML
  let modalHTML = `
    <div class="modal fade" id="workoutHistoryModal" tabindex="-1" role="dialog" aria-labelledby="workoutHistoryLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="workoutHistoryLabel">${entry.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <strong>Date:</strong> ${entry.date}<br/>
              <strong>Rating:</strong> ${entry.rating ? '⭐'.repeat(entry.rating) : 'Not rated'}
            </div>
            <hr/>
            <h6>Exercise Breakdown:</h6>
  `;
  
  if (entry.exercises && entry.exercises.length > 0) {
    modalHTML += '<table class="table table-sm"><thead><tr><th>Exercise</th><th>Performance</th><th>Target</th><th style="width: 40px;"></th></tr></thead><tbody>';
    entry.exercises.forEach(ex => {
      modalHTML += `
        <tr>
          <td>${ex.name}</td>
          <td><strong>${ex.repsOutput}</strong></td>
          <td>${ex.targetReps}</td>
          <td style="text-align: center;"><i class="bi bi-graph-up exercise-history-icon" data-exercise-id="${ex.exerciseId}" style="cursor: pointer; color: #6c757d; font-size: 1.1rem;" title="View exercise history"></i></td>
        </tr>
      `;
    });
    modalHTML += '</tbody></table>';
  } else {
    modalHTML += '<p class="text-muted">No exercise details recorded for this workout.</p>';
  }
  
  modalHTML += `
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="closeWorkoutModal()">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Remove old modal if exists
  const oldModal = document.getElementById('workoutHistoryModal');
  if (oldModal) oldModal.remove();
  
  // Add and show new modal
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Attach close handlers to both the X button and close button
  const modalEl = document.getElementById('workoutHistoryModal');
  const closeBtn = modalEl.querySelector('.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeWorkoutModal);
  }
  
  // Add event listeners to exercise history icons
  modalEl.querySelectorAll('.exercise-history-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
      console.log('exercise-history-icon clicked');
      e.preventDefault();
      e.stopPropagation();
      const exerciseId = icon.getAttribute('data-exercise-id');
      console.log('Showing analytics for exercise:', exerciseId);
      showExerciseAnalytics(exerciseId);
    });
    
    icon.addEventListener('mouseover', () => {
      icon.style.color = '#007bff';
    });
    
    icon.addEventListener('mouseout', () => {
      icon.style.color = '#6c757d';
    });
  });
  
  // Click outside modal to close
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) {
      closeWorkoutModal();
    }
  });
  
  // Use Bootstrap modal if available
  if (window.bootstrap?.Modal) {
    const modal = new window.bootstrap.Modal(modalEl);
    modal.show();
  } else {
    // Fallback for non-Bootstrap environments
    modalEl.style.display = 'block';
    modalEl.classList.add('show');
    document.body.classList.add('modal-open');
    
    // Create and show backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    backdrop.id = 'workoutModalBackdrop';
    document.body.appendChild(backdrop);
  }
}

// Helper function to close workout history modal
function closeWorkoutModal() {
  const modalEl = document.getElementById('workoutHistoryModal');
  if (!modalEl) return;
  
  if (window.bootstrap?.Modal) {
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    if (modal) {
      modal.hide();
    }
  } else {
    // Fallback close
    modalEl.style.display = 'none';
    modalEl.classList.remove('show');
    document.body.classList.remove('modal-open');
    
    const backdrop = document.getElementById('workoutModalBackdrop');
    if (backdrop) backdrop.remove();
  }
  modalEl.remove();
}

// PHASE 3: Show exercise analytics and progress charts
function showExerciseAnalytics(exerciseId) {
  const log = JSON.parse(localStorage.getItem('workoutLog') || '[]');
  const exercise = EXERCISES.find(e => e.id === exerciseId);
  
  if (!exercise) {
    alert('Exercise not found');
    return;
  }
  
  // Collect all historical data for this exercise (ALL sets)
  const historyData = [];
  log.forEach(workout => {
    if (workout.exercises) {
      const exerciseRecords = workout.exercises.filter(e => e.exerciseId === exerciseId);
      exerciseRecords.forEach(exerciseRecord => {
        historyData.push({
          date: workout.date,
          performance: exerciseRecord.repsOutput,
          timestamp: exerciseRecord.timestamp
        });
      });
    }
  });
  
  historyData.sort((a, b) => a.timestamp - b.timestamp);
  
  if (historyData.length === 0) {
    alert('No historical data for this exercise yet. Log more workouts to see analytics.');
    return;
  }
  
  // Always create a standalone analytics modal
  const analyticsModalHTML = `
    <div class="modal fade" id="exerciseAnalyticsModal" tabindex="-1" role="dialog" aria-labelledby="exerciseAnalyticsLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exerciseAnalyticsLabel">${exercise.name} - Analytics</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="analyticsModalBody">
            <!-- Analytics content will be inserted here -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Remove old analytics modal if exists
  const oldAnalyticsModal = document.getElementById('exerciseAnalyticsModal');
  if (oldAnalyticsModal) oldAnalyticsModal.remove();
  
  document.body.insertAdjacentHTML('beforeend', analyticsModalHTML);
  const historyModal = document.getElementById('exerciseAnalyticsModal');
  
  // Create analytics content
  let analyticsHTML = `
    <h6>${exercise.name} - Progress Tracker</h6>
    
    <ul class="nav nav-tabs" id="analyticsTab" role="tablist" style="margin-bottom: 1rem;">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="table-tab" data-bs-toggle="tab" data-bs-target="#table-content" type="button" role="tab" aria-controls="table-content" aria-selected="true">Table</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="chart-tab" data-bs-toggle="tab" data-bs-target="#chart-content" type="button" role="tab" aria-controls="chart-content" aria-selected="false">Chart</button>
      </li>
    </ul>
    
    <div class="tab-content" id="analyticsTabContent">
      <div class="tab-pane fade show active" id="table-content" role="tabpanel" aria-labelledby="table-tab">
        <h6>Performance History:</h6>
        <table class="table table-sm">
          <thead>
            <tr><th>Date</th><th>Reps</th><th>Weight</th><th>Performance</th></tr>
          </thead>
          <tbody>
  `;
  
  // Parse reps and weight from performance string
  const parsedData = historyData.map(record => {
    const match = record.performance.match(/(\d+)(?:\s*x\s*(\d+))?/);
    let reps = 0, weight = 0;
    
    if (match) {
      reps = parseInt(match[1]) || 0;
      weight = match[2] ? parseInt(match[2]) : 0;
    }
    
    return {
      ...record,
      reps: reps,
      weight: weight
    };
  });
  
  // Display in reverse chronological order (most recent first)
  parsedData.reverse().forEach(record => {
    const weightDisplay = record.weight > 0 ? record.weight : '—';
    analyticsHTML += `<tr><td>${record.date}</td><td><strong>${record.reps}</strong></td><td><strong>${weightDisplay}</strong></td><td>${record.performance}</td></tr>`;
  });
  
  analyticsHTML += '</tbody></table>';
  
  // Calculate statistics for both reps and weight
  const reps = parsedData.map(r => r.reps).filter(p => p > 0);
  const weights = parsedData.map(w => w.weight).filter(w => w > 0);
  
  let statsHTML = '<hr/><h6>Statistics:</h6><ul class="list-unstyled">';
  
  if (reps.length > 0) {
    const maxReps = Math.max(...reps);
    const avgReps = (reps.reduce((a, b) => a + b, 0) / reps.length).toFixed(1);
    const repImprovement = maxReps - Math.min(...reps);
    
    statsHTML += `
      <li><strong>Reps - Personal Record:</strong> ${maxReps}</li>
      <li><strong>Reps - Average:</strong> ${avgReps}</li>
      <li><strong>Reps - Total Improvement:</strong> ${repImprovement > 0 ? '+' : ''}${repImprovement}</li>
    `;
  }
  
  if (weights.length > 0) {
    const maxWeight = Math.max(...weights);
    const avgWeight = (weights.reduce((a, b) => a + b, 0) / weights.length).toFixed(1);
    const weightImprovement = maxWeight - Math.min(...weights);
    
    statsHTML += `
      <li style="margin-top: 0.75rem;"><strong>Weight - Personal Record:</strong> ${maxWeight}</li>
      <li><strong>Weight - Average:</strong> ${avgWeight}</li>
      <li><strong>Weight - Total Improvement:</strong> ${weightImprovement > 0 ? '+' : ''}${weightImprovement}</li>
    `;
  }
  
  statsHTML += `<li style="margin-top: 0.75rem;"><strong>Sessions:</strong> ${historyData.length}</li></ul>`;
  analyticsHTML += statsHTML;
  
  analyticsHTML += `
      </div>
      <div class="tab-pane fade" id="chart-content" role="tabpanel" aria-labelledby="chart-tab">
        <div style="position: relative; width: 100%; height: 400px; margin: 1rem 0; overflow: hidden;">
          <canvas id="performanceChart" style="position: relative; width: 100%; height: 100%;"></canvas>
        </div>
      </div>
    </div>
  `;
  
  // Get the modal body element (always the same for standalone modal now)
  const modalBody = historyModal.querySelector('#analyticsModalBody');
  
  modalBody.innerHTML = analyticsHTML;
  
  // Chart tab handler - use Bootstrap's shown.bs.tab event
  const chartTab = modalBody.querySelector('#chart-tab');
  const chartPane = modalBody.querySelector('#chart-content');
  
  if (chartTab && chartPane) {
    // Listen for Bootstrap tab show event
    chartTab.addEventListener('shown.bs.tab', () => {
      setTimeout(() => {
        waitForChartJS(() => {
          initializePerformanceChart(historyData, exercise.name);
        });
      }, 150);
    });
    
    // Also listen for click to handle manual tab switching
    chartTab.addEventListener('click', () => {
      setTimeout(() => {
        waitForChartJS(() => {
          initializePerformanceChart(historyData, exercise.name);
        });
      }, 150);
    });
  }
  
  // Show the modal and initialize chart after modal is visible
  if (window.bootstrap?.Modal) {
    const modal = new window.bootstrap.Modal(historyModal);
    
    // Listen for modal shown event
    historyModal.addEventListener('shown.bs.modal', () => {
      // If chart tab is already active, initialize immediately
      if (chartTab && chartTab.classList.contains('active')) {
        setTimeout(() => {
          waitForChartJS(() => {
            initializePerformanceChart(historyData, exercise.name);
          });
        }, 150);
      }
    }, { once: true });
    
    modal.show();
  }
}

// Helper function to reattach exercise history handlers
function attachExerciseHistoryHandlers(modalEl) {
  modalEl.querySelectorAll('.exercise-history-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showExerciseAnalytics(icon.getAttribute('data-exercise-id'));
    });
    
    icon.addEventListener('mouseover', () => {
      icon.style.color = '#007bff';
    });
    
    icon.addEventListener('mouseout', () => {
      icon.style.color = '#6c757d';
    });
  });
}

// Initialize Chart.js performance chart with dual metrics (reps and weight)
function initializePerformanceChart(historyData, exerciseName) {
  const chartCanvas = document.getElementById('performanceChart');
  
  if (!chartCanvas) {
    console.warn('Canvas element not found');
    return;
  }
  
  // Ensure canvas has proper dimensions
  const parent = chartCanvas.parentElement;
  if (parent && window.getComputedStyle(parent).display === 'none') {
    console.warn('Canvas parent is hidden, deferring chart initialization');
    return;
  }
  
  // Destroy any existing chart to avoid conflicts
  if (window.performanceChartInstance) {
    window.performanceChartInstance.destroy();
    window.performanceChartInstance = null;
  }
  
  try {
    const ctx = chartCanvas.getContext('2d');
    if (!ctx) {
      console.error('Could not get canvas context');
      return;
    }
  } catch (e) {
    console.error('Error getting canvas context:', e);
    return;
  }
  
  // Parse reps and weight from performance string
  const parsedData = historyData.map(record => {
    const match = record.performance.match(/(\d+)(?:\s*x\s*(\d+))?/);
    let reps = 0, weight = 0;
    
    if (match) {
      reps = parseInt(match[1]) || 0;
      weight = match[2] ? parseInt(match[2]) : 0;
    }
    
    return {
      ...record,
      reps: reps,
      weight: weight
    };
  });
  
  // Extract reps and weight arrays
  const repsData = parsedData.map(r => r.reps);
  const weightData = parsedData.map(w => w.weight);
  
  // Create labels for the X-axis (show date + set number if multiple per day)
  const dateCountMap = {};
  const labels = historyData.map((record, index) => {
    const date = record.date;
    if (!dateCountMap[date]) {
      dateCountMap[date] = 0;
    }
    dateCountMap[date]++;
    
    // If multiple entries on same date, show set number
    if (historyData.filter(r => r.date === date).length > 1) {
      return `${date} (Set ${dateCountMap[date]})`;
    }
    return date;
  });
  
  // Determine if we have weight data
  const hasWeightData = weightData.some(w => w > 0);
  
  // Create the chart
  const datasets = [
    {
      label: 'Reps',
      data: repsData,
      borderColor: '#007bff',
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: '#007bff',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      tension: 0.3,
      fill: true,
      yAxisID: 'y'
    }
  ];
  
  // Add weight dataset only if weight data exists
  if (hasWeightData) {
    datasets.push({
      label: 'Weight',
      data: weightData,
      borderColor: '#dc3545',
      backgroundColor: 'rgba(220, 53, 69, 0.1)',
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: '#dc3545',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      tension: 0.3,
      fill: true,
      yAxisID: 'y1'
    });
  }
  
  const chartConfig = {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Reps'
          },
          beginAtZero: true
        }
      }
    }
  };
  
  // Add secondary Y-axis for weight if weight data exists
  if (hasWeightData) {
    chartConfig.options.scales.y1 = {
      type: 'linear',
      display: true,
      position: 'right',
      title: {
        display: true,
        text: 'Weight'
      },
      beginAtZero: true,
      grid: {
        drawOnChartArea: false
      }
    };
  }
  
  const ctx = chartCanvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get 2D context from canvas');
    return;
  }
  
  try {
    window.performanceChartInstance = new Chart(ctx, chartConfig);
  } catch (error) {
    console.error('Error creating chart:', error);
  }
}

// Helper function to close analytics modal
function closeAnalyticsModal() {
  const modalEl = document.getElementById('analyticsModal');
  if (!modalEl) return;
  
  if (window.bootstrap?.Modal) {
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    if (modal) {
      modal.hide();
    }
  } else {
    // Fallback close
    modalEl.style.display = 'none';
    modalEl.classList.remove('show');
    document.body.classList.remove('modal-open');
    
    const backdrop = document.getElementById('analyticsModalBackdrop');
    if (backdrop) backdrop.remove();
  }
  modalEl.remove();
}

document.getElementById("export-log-btn").addEventListener("click", function () {
    const data = JSON.stringify(localStorage, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    const today = new Date().toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD format
    a.download = `getSwoll-${today}.json`;
    a.click();

    URL.revokeObjectURL(url);
});


// IMPORT JSON file → localStorage
document.getElementById("import-log-btn").addEventListener("click", function () {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";

    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const data = JSON.parse(reader.result);

            // (Optional) clear existing storage
            // localStorage.clear();

            // Restore keys
            Object.keys(data).forEach(key => {
                localStorage.setItem(key, data[key]);
            });

            // Refresh page so UI repopulates
            location.reload();
        };

        reader.readAsText(file);
    };

    input.click();
});

// Register Service Worker for PWA support
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed:', err));
}

