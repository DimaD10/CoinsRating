document.addEventListener("click", e => {

    const menu = document.querySelector('.header-navigation');
    const body = document.querySelector('body');

    if (e.target.classList.contains('header-burger')) {
        menu.classList.toggle('_active');
        e.target.classList.toggle('_active');
        body.classList.toggle('scroll-none');
    }
})