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