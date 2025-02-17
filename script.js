// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle with Animation
const themeToggle = document.getElementById('themeToggle');

function createThemeAnimation(event) {
    let animationDiv = document.createElement('div');
    animationDiv.classList.add('theme-animation');
    document.body.appendChild(animationDiv);

    // Position the animation at the theme toggle button
    let rect = event.target.getBoundingClientRect();
    animationDiv.style.left = `${rect.left + rect.width / 2 - 50}px`;
    animationDiv.style.top = `${rect.top + rect.height / 2 - 50}px`;

    setTimeout(() => animationDiv.remove(), 600);
}

themeToggle.addEventListener('click', (event) => {
    createThemeAnimation(event);
    setTimeout(() => {
        document.body.classList.toggle('dark-mode');
    }, 300);

    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

// Adding styles for animation
document.head.insertAdjacentHTML('beforeend', 
    `<style>
        .theme-animation {
            position: fixed;
            width: 100px;
            height: 100px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: spreadEffect 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes spreadEffect {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(20); opacity: 0; }
        }
    </style>`
);
