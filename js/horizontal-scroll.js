const scrollContainer = document.querySelector(".watchlist-main__wrapper");
const decorParrent = document.querySelector('.watchlist-main');
const ruler = document.querySelector('.watchlist-product');


scrollContainer.addEventListener('scroll', () => {
    const scrollPosition = scrollContainer.scrollLeft;
    let gridWidth = document.querySelector('.watchlist-main__list');

    if (gridWidth.classList.contains('_grid') && window.innerWidth > 991.98) {
        if (scrollPosition + window.innerWidth > 1280) {
            decorParrent.classList.add('_in-the-end');
        } else {
            decorParrent.classList.remove('_in-the-end');
        }
    } else {
        if (scrollPosition + window.innerWidth > ruler.offsetWidth) {
            decorParrent.classList.add('_in-the-end');
        } else {
            decorParrent.classList.remove('_in-the-end');
        }
    }
});