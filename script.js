// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change button icon
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = "☀️"; // Light mode icon
    } else {
        themeToggle.textContent = "🌙"; // Dark mode icon
    }
});
