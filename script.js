// JavaScript for Basic Animations and Interactions

// Smooth Scroll on Navigation Clicks
document.querySelectorAll('header ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Search Input Animation
const searchInput = document.querySelector('main input');

searchInput.addEventListener('focus', () => {
    searchInput.style.transition = "width 0.3s";
    searchInput.style.width = "400px";
});

searchInput.addEventListener('blur', () => {
    searchInput.style.width = "300px";
});
