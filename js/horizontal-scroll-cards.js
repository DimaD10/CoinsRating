const scrollBox = document.querySelector(".also-watch__list");
const decor = document.querySelector('.also-watch-box');

scrollBox.addEventListener('scroll', () => {
    const scrollPosition = scrollBox.scrollLeft;

    if (scrollPosition + window.innerWidth > 1280) {
        decor.classList.add('_in-the-end');
    } else {
        decor.classList.remove('_in-the-end');
    }
});