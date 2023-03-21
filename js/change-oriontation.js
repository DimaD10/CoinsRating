const buttons = document.querySelectorAll('.watchlist-orientation__button');

document.addEventListener('click', e => {
    if (e.target.classList.contains("watchlist-orientation__button")) {
        buttons.forEach(el => {
            el.classList.remove('_current');
        });
        e.target.classList.add('_current');
    }
})