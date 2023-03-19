const cats = document.querySelectorAll(".watchlist-categories__text");

document.addEventListener("click", e => {
    if (e.target.classList.contains('watchlist-categories__text')) {
        cats.forEach(el => {
            el.parentElement.classList.remove("watchlist-categories__el_curent");
        });

        e.target.parentElement.classList.add("watchlist-categories__el_curent");
    }
})