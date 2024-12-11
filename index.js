const menuIcon = document.getElementById("menu-icon")
const navLinks = document.getElementById("nav-links")

const body = document.querySelector("body")

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active")
    navLinks.classList.toggle("active")

    if (menuIcon.classList.contains("active")) {
        body.style.overflowY = "hidden";
    } else {
        body.style.overflowY = "auto";
    }
})