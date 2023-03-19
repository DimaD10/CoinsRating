document.addEventListener("click", e => {
    if (e.target.classList.contains('watchlist-favorite')) {
        e.target.classList.toggle('_favorite');
    }
})