/* ========== Typing Effect for "Java Developer" ========== */
const text = "Java Developer";
let i = 0;
function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;

/* ========== Hamburger Button ========== */
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const modeToggle = document.getElementById("mode-toggle"); // Get the mode button

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Close menu when any nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    // Close menu when the mode button is clicked
    modeToggle.addEventListener("click", function () {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

/* ========== Navbar Active Link Highlight ========== */
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function changeActiveSection() {
        let scrollY = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach((link) => link.classList.remove("active"));

                let activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }

    window.addEventListener("scroll", changeActiveSection);
    changeActiveSection(); // Run initially to set active link on page load
});

/* ========== Show More Button ========== */
function toggleAbout() {
    var moreContent = document.getElementById("moreContent");
    var btn = document.getElementById("showMoreBtn");

    if (moreContent.classList.contains("show")) {
        moreContent.classList.remove("show");
        btn.textContent = "Show More";
        setTimeout(() => moreContent.style.display = "none", 500); // Hide after transition
    } else {
        moreContent.style.display = "block"; // Show before transition
        setTimeout(() => moreContent.classList.add("show"), 10);
        btn.textContent = "Show Less";
    }
}

/* ==========  Display Button when Scrolling Down ========== */
window.onscroll = function () {
    let button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
};

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ==========  Smooth Scroll Effect for Internal Links ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

/* ==========  Dark Mode ========== */
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;
    const icon = modeToggle.querySelector("i");

    // Apply dark mode if saved in localStorage
    if (localStorage.getItem("mode") === "dark") {
        body.classList.add("dark-mode");
        icon.classList.replace("fa-moon", "fa-sun");
    }

    modeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("mode", "dark");
            icon.classList.replace("fa-moon", "fa-sun");
        } else {
            localStorage.setItem("mode", "light");
            icon.classList.replace("fa-sun", "fa-moon");
        }
    });
});