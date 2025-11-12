// Exercise Tracker Module
const ExerciseTracker = {
    // Configuration for the SimpleLightbox
    lightboxConfig: {
        captionDelay: 100,
        enableZoom: true,
        captionsData: 'alt',
        animationSpeed: 250,
        // Disable history/deep-linking to avoid URL changes when opening the lightbox
        history: false
    },
    // Hold the active SimpleLightbox instance so we can destroy/recreate when DOM changes
    _lightboxInstance: null,

    // Initialize the exercise tracker
    init() {
        this.initLightbox();
        this.initExercises();
        this.loadSavedValues();
        this.filterRowsByURL();
    },

    // Parse URL to find requested exercise indices. Returns an array preserving order
    // and duplicates. Supported input formats include:
    //  ?e=1  ,  ?e=1,2  ,  ?e=1&e=2  ,  ?e=1&2
    parseExerciseSelection() {
        const raw = window.location.search || '';
        if (!raw || raw.length <= 1) return [];
        const qs = raw.substring(1); // remove '?'
        const parts = qs.split('&').filter(Boolean);
        const values = [];

        // Iterate tokens in order to preserve sequence and duplicates
        parts.forEach(part => {
            if (!part) return;
            if (part.includes('=')) {
                const [k, v] = part.split('=');
                if (k === 'e' && v) {
                    v.split(',').forEach(item => {
                        const val = item.trim();
                        if (/^\d+$/.test(val)) values.push(val);
                    });
                }
                // ignore other keys
            } else {
                // token like '2' from a URL like ?e=1&2
                const token = part.trim();
                if (/^\d+$/.test(token)) values.push(token);
            }
        });

        // We parsed tokens in order above and preserve duplicates; return that list.
        return values; // preserve order and duplicates
    },

    // Show only rows that match indices from the URL (data-index attribute)
    filterRowsByURL() {
        const selection = this.parseExerciseSelection();
        if (!selection || selection.length === 0) return; // show all by default

        const container = document.querySelector('.container');
        if (!container) return;

        // Get current rows as an array for lookup
        const originalRows = Array.from(container.querySelectorAll('.exercise-row'));
        if (originalRows.length === 0) return;

        // Build a new fragment with rows in the order specified by selection.
        // If an index appears more than once, include clones to show duplicates.
        const frag = document.createDocumentFragment();
        selection.forEach(sel => {
            // find matching row by data-index or fallback to 1-based position
            let match = originalRows.find((r, i) => {
                const idxAttr = r.getAttribute('data-index');
                const effective = (idxAttr !== null && idxAttr !== undefined) ? String(idxAttr) : String(i + 1);
                return String(effective) === String(sel);
            });
            if (match) {
                frag.appendChild(match.cloneNode(true));
            }
        });

        // Replace container rows with the ordered fragment
        // Remove existing exercise rows
        originalRows.forEach(r => r.remove());
        container.appendChild(frag);

        // Reinitialize lightbox and event listeners for newly inserted nodes
        this.initLightbox();
        this.initExercises();
        this.loadSavedValues();
    },

    // Initialize SimpleLightbox
    initLightbox() {
        // Destroy previous instance (if any) to avoid duplicate handlers and stale references
        try {
            if (this._lightboxInstance && typeof this._lightboxInstance.destroy === 'function') {
                this._lightboxInstance.destroy();
            }
        } catch (e) {
            // ignore
        }
        this._lightboxInstance = new SimpleLightbox('a.lightbox', this.lightboxConfig);
    },

    // Initialize exercise event listeners
    initExercises() {
        document.querySelectorAll('.submit-exercise').forEach(button => {
            button.addEventListener('click', (e) => {
                const exercise = e.target.getAttribute('data-exercise');
                this.updateExercise(exercise);
            });
        });
    },

    // Update exercise values
    updateExercise(exercise) {
        const repsInput = document.getElementById(`${exercise}-reps`);
        const weightInput = document.getElementById(`${exercise}-weight`);
        const reps = repsInput.value;
        const weight = weightInput.value;
        
        if (reps && weight) {
            // Update the display
            document.getElementById(`${exercise}-output`).textContent = `${reps} x ${weight}`;
            
            // Save to localStorage
            this.saveExercise(exercise, reps, weight);
            
            // Find the exercise row and add success class
            const exerciseRow = repsInput.closest('.exercise-row');
            exerciseRow.classList.remove('exercise-row-striped');  // Remove any existing background
            exerciseRow.classList.add('exercise-complete');
            // debug: class added

            // Clear input fields
            repsInput.value = '';
            weightInput.value = '';
        }
    },

    // Save exercise data to localStorage
    saveExercise(exercise, reps, weight) {
        localStorage.setItem(`exercise-${exercise}`, JSON.stringify([reps, weight]));
    },

    // Load saved values from localStorage
    loadSavedValues() {
        const exercises = this.getExercises();
        exercises.forEach(exercise => {
            const saved = localStorage.getItem(`exercise-${exercise}`);
            if (saved) {
                const [reps, weight] = JSON.parse(saved);
                this.setExerciseValues(exercise, reps, weight);
            }
        });
    },

    // Set exercise values in the UI
    setExerciseValues(exercise, reps, weight) {
        // Only update the output display, keep input fields empty
        document.getElementById(`${exercise}-output`).textContent = `${reps} x ${weight}`;
        
        // Clear any existing values in the input fields
        document.getElementById(`${exercise}-reps`).value = '';
        document.getElementById(`${exercise}-weight`).value = '';
    },

    // Get all exercise IDs from the page
    getExercises() {
        const exercises = new Set();
        document.querySelectorAll('.submit-exercise').forEach(button => {
            exercises.add(button.getAttribute('data-exercise'));
        });
        return Array.from(exercises);
    },

    // Add a new exercise row (helper function for dynamic addition)
    // Params:
    //  - exerciseId: unique id used for inputs and output spans
    //  - title: display title for the exercise
    //  - imageUrl: GIF URL to open in the lightbox
    //  - defaultReps, defaultWeight: optional defaults for the output display
    //  - index: OPTIONAL explicit data-index value so the row can be targeted via ?e=INDEX
    createExerciseRow(exerciseId, title, imageUrl, defaultReps = '', defaultWeight = '', index = null) {
        // imageUrl should be the GIF used for the lightbox; derive a jpg preview if available
        const preview = imageUrl && imageUrl.toLowerCase().endsWith('.gif') ? imageUrl.replace(/\.gif$/i, '.jpg') : imageUrl;
        const dataIndexAttr = (index !== null && typeof index !== 'undefined') ? ` data-index="${index}"` : '';
        const template = `
            <div class="row exercise-row"${dataIndexAttr}>
                <div class="col-2">
                    <a href="${imageUrl}" class="lightbox">
                        <img src="${preview}" class="img-fluid gallery-image w-full h-48 object-cover transition duration-200" alt="${title}">
                    </a>
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col">${title}</div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <input type="number" id="${exerciseId}-reps" placeholder="reps..." class="exercise-input" value="${defaultReps}">
                        </div>
                        <div class="col-3">
                            <input type="number" id="${exerciseId}-weight" placeholder="weight..." class="exercise-input" value="${defaultWeight}">
                        </div>
                        <div class="col-2">
                            <button class="btn btn-primary btn-sm submit-exercise" data-exercise="${exerciseId}">Submit</button>
                        </div>
                        <div class="col-4"><span id="${exerciseId}-output">${defaultReps ? defaultReps + ' x ' + defaultWeight : ''}</span></div>
                    </div>
                </div>
            </div>
        `;
        
        const container = document.querySelector('.container');
        container.insertAdjacentHTML('beforeend', template);
        
        // Reinitialize event listeners and lightbox
        this.init();
    }
};