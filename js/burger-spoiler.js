document.addEventListener('click', e => {
    if (e.target.classList.contains('header-submenu__head')) {
        e.target.closest(".header-submenu").classList.toggle('_opened');
    }
})