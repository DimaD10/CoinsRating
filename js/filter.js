document.querySelector('.watchlist-filters__button_filter').addEventListener('click', e => {
    document.querySelector('.watchlist-filters__button_filter').classList.toggle('_opened');
    document.querySelector('.filter').classList.toggle('_opened');
})