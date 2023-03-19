const scrollContainer = document.querySelector(".watchlist-main__wrapper");
const decorParrent = document.querySelector('.watchlist-main');

scrollContainer.addEventListener('scroll', () => {
    const scrollPosition = scrollContainer.scrollLeft;
    console.log(scrollPosition + window.innerWidth);

    if (scrollPosition + window.innerWidth > 1280) {
        decorParrent.classList.add('_in-the-end');
    } else {
        decorParrent.classList.remove('_in-the-end');
    }
});