
let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
        this.closest('.header-main-actions__el_select').classList.toggle("_active");
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            icon = this.closest('.header-main-actions__el_select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
        icon.classList.remove("_active");
    }

};
select();