// This handles the theme toggle and remembers it across pages
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    
    // Apply saved theme on load
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }

    // Toggle logic
    if (btn) {
        btn.onclick = function() {
            document.body.classList.toggle("dark-theme");
            const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
            localStorage.setItem("theme", theme);
        };
    }
});
