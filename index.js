const menuIcon = document.getElementById("menu-icon")
const navLinks = document.getElementById("nav-links")

const body = document.querySelector("body")
const header = document.querySelector('header');

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active")
    navLinks.classList.toggle("active")

    if (menuIcon.classList.contains("active")) {
        body.style.overflowY = "hidden";
    } else {
        body.style.overflowY = "auto";
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.project_container');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('bottom');
                entry.target.classList.remove('top');
            } else {
                entry.target.classList.remove('visible');
                if (window.innerHeight - entry.target.getBoundingClientRect().bottom < 10) {
                    entry.target.classList.add('bottom');
                }
                else {
                    entry.target.classList.add('top');
                }
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            header.classList.remove('moved');
        } else {
            header.classList.add('moved');
        }
    });
});

document.querySelector('.hero-button').addEventListener('click', function (event) {
    event.preventDefault();

    const target = document.getElementById('about');
    const offset = 200;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});