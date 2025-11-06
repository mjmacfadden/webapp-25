// --- SimpleLightbox Initialization ---

document.addEventListener('DOMContentLoaded', function() {
    // Initialize SimpleLightbox on all 'a' tags within the element with the class 'lightbox'
    // The captions are automatically derived from the 'title' attribute of the <a> tag.
    var gallery = new SimpleLightbox('.lightbox a', {
        // Example Option: Set the delay for the caption to appear (in ms)
        captionDelay: 100
        // SimpleLightbox handles navigation, closing, and responsiveness automatically.
    });
});