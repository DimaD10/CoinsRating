document.addEventListener('click', e => {
    if (e.target.classList.contains('trends-switch')) {
        e.target.classList.toggle('_active');
    }
})