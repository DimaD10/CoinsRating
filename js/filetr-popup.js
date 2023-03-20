document.addEventListener("click", e => {
    let filter = document.querySelector('.filter');
    const body = document.querySelector('body');

    if (e.target.dataset.filter === "open") {
        filter.classList.add("_opened");
        body.style.overflow = 'hidden';
    }

    if (e.target.dataset.filter === "close") {
        filter.classList.remove("_opened");
        body.style.overflow = 'auto';
    }
})