document.querySelector('.hero-button').addEventListener('click', function (event) {
    event.preventDefault();

    const header = document.querySelector('header');
    const target = document.getElementById('about');
    const offset = 40;

    const targetPosition = target.getBoundingClientRect().top - header.offsetHeight + window.scrollY - offset ;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});