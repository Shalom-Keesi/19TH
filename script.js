// Simple slideshow functionality
const slides = document.querySelectorAll('.slideshow-container img');
let currentSlide = 0;

function showSlide(n) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Calculate the index of the next slide
    currentSlide = (n + slides.length) % slides.length;
    
    // Show the current slide
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

// Modal functionality
const gridItems = document.querySelectorAll('.grid-item-circle[data-modal]');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        const modalType = item.getAttribute('data-modal');
        const modal = document.getElementById(`${modalType}-modal`);
        if (modal) {
            modal.style.display = 'flex';
        }
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

// Close modal when clicking outside of content
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
