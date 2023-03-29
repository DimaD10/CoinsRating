const scrollContainer = document.querySelector(".watchlist-main__wrapper");
const decorParrent = document.querySelector('.watchlist-main');
const ruler = document.querySelector('.watchlist-product');

const names = document.querySelectorAll('.watchlist-product-name');

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


    names.forEach(el => {
        el.querySelector('.watchlist-product-name__box').style.width = `${el.offsetWidth}px`;
        el.querySelector('.watchlist-product-name__box').style.height = `${el.offsetHeight}px`;
        el.querySelector('.watchlist-product-name__box').style.left = `${scrollPosition - 11}px`;
    })

    if (!gridWidth.classList.contains('_grid')) {
        names.forEach(el => {

            if (scrollPosition - 10 >= document.querySelector('.watchlist-legends__title').offsetLeft) {
                el.classList.add('_fixed');
            } else {
                el.classList.remove('_fixed');
            }
        })
    }

});