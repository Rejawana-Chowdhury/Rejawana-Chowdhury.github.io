// Scroll Reveal Animation
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((entry) => {
        const windowHeight = window.innerHeight;
        const revealTop = entry.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            entry.classList.add("active");
        }
    });
};

window.addEventListener("scroll", reveal);

// Initial check for elements in view
reveal();
