// script.js

// Function to add 'visible' class when element is in view
function revealOnScroll() {
    const description = document.getElementById('description');
    const rect = description.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        description.classList.add('visible');
    }
}

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);
