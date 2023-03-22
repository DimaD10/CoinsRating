const buttons = document.querySelectorAll('.watchlist-orientation__button');
const list = document.querySelector('.watchlist-main__list');

document.addEventListener('click', e => {
    if (e.target.classList.contains("watchlist-orientation__button")) {
        buttons.forEach(el => {
            el.classList.remove('_current');
        });
        e.target.classList.add('_current');

        if (e.target.classList.contains('watchlist-orientation__button_grid')) {
            list.classList.add("_grid");
            document.querySelector('.watchlist-legends').style.display = 'none';
        } else {
            list.classList.remove("_grid");
            document.querySelector('.watchlist-legends').style.display = 'grid';
        }
    }
})