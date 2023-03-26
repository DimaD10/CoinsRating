document.addEventListener("click", e => {
    if (e.target.classList.contains('spoiler__header')) {
        e.target.parentElement.classList.toggle('_opened');
    }
})