const buttons = document.querySelectorAll('.watchlist-orientation__button');
const list = document.querySelector('.watchlist-main__list');
const mainList = document.querySelector('.watchlist-main');

document.addEventListener('click', e => {
    if (e.target.classList.contains("watchlist-orientation__button")) {
        buttons.forEach(el => {
            el.classList.remove('_current');
        });
        e.target.classList.add('_current');

        if (e.target.classList.contains('watchlist-orientation__button_grid')) {
            list.classList.add("_grid");
            document.querySelector('.watchlist-legends').style.display = 'none';
            mainList.classList.add('grid-mod');
        } else {
            list.classList.remove("_grid");
            document.querySelector('.watchlist-legends').style.display = 'grid';
            mainList.classList.remove('grid-mod');
        }
    }
})