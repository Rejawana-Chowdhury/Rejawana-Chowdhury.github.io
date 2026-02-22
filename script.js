// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Form Submit (Front-End Only - Email via service later)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (Demo - Connect EmailJS/Netlify Forms for live.)');
    e.target.reset();
});

// Intersection Observer Fallback for Older Browsers
if (typeof CSS !== 'undefined' && !CSS.supports('animation-timeline: view()')) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease forwards';
            }
        });
    });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
