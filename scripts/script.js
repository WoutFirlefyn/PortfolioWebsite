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
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            header.classList.remove('moved');
        } else {
            header.classList.add('moved');
        }
    });
});