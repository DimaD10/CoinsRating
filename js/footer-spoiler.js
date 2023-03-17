document.addEventListener('click', e => {
    const text = document.querySelector('.footer-paragraph');
    const menu = document.querySelector('.footer-navigation');

    if (e.target.classList.contains('footer-spoiler')) {
        e.target.classList.toggle('_active');
        text.classList.toggle('_active');
        menu.classList.toggle('_active');
    }
})