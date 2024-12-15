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