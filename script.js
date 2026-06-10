// ==========================
// DARK MODE TOGGLE
// ==========================

const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️";
}

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        darkModeBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        darkModeBtn.textContent = "🌙";
    }
});


// ==========================
// TYPING EFFECT
// ==========================

const typingElement = document.getElementById("typing");

const words = [
    "Aspiring Data Scientist",
    "Web Developer",
    "WordPress Developer",
    "Python Programmer",
    "Data Analytics Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// ==========================
// ANIMATED COUNTERS
// ==========================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
            +counter.getAttribute("data-target");

        let count = 0;

        const increment = target / 80;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";
            }
        };

        updateCounter();
    });
};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection =
        document.querySelector(".stats");

    if (!statsSection) return;

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (
        sectionTop < window.innerHeight &&
        !counterStarted
    ) {
        startCounter();
        counterStarted = true;
    }
});


// ==========================
// SMOOTH SCROLLING
// ==========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements =
document.querySelectorAll(
    ".card, .skill, .stat, .timeline-item, .gallery a"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0)";
        }
    });
}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(40px)";
    element.style.transition =
        "all 0.8s ease";
});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ==========================
// NAVBAR ACTIVE LINK
// ==========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }
    });
});


// ==========================
// CONTACT FORM DEMO
// ==========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Thank you! Your message has been received."
        );

        form.reset();
    });
}


// ==========================
// PAGE LOADER EFFECT
// ==========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition =
    "opacity 0.8s ease";


// ==========================
// CONSOLE SIGNATURE
// ==========================

console.log(
    "%cPortfolio developed by Yashashvi Sundriyal",
    "color:#2563eb;font-size:16px;font-weight:bold;"
);