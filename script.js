document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const paginationContainer = document.querySelector('.pagination-dots');
    let slideshowInterval;

    // Create a dot for each slide
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.dataset.slideIndex = i;
        paginationContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function showSlides() {
        // Remove active classes from all slides and dots
        slides.forEach(slide => slide.classList.remove('active-slide'));
        dots.forEach(dot => dot.classList.remove('active-dot'));

        // Increment index, looping back to 0 if at the end
        slideIndex++;
        if (slideIndex > totalSlides) {
            slideIndex = 1;
        }

        // Show the current slide and dot
        slides[slideIndex - 1].classList.add('active-slide');
        dots[slideIndex - 1].classList.add('active-dot');

        // Reset the automatic timer whenever a slide is shown
        resetInterval();
    }

    function resetInterval() {
        clearInterval(slideshowInterval);
        slideshowInterval = setTimeout(showSlides, 5000);
    }

    // Add click event listeners to the dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.dataset.slideIndex);
            slideIndex = index; // Set the slideshow index to the clicked dot's index
            showSlides(); // Show the corresponding slide
        });
    });

    // Start the slideshow for the first time
    showSlides();
});