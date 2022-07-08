
const buttonlogin = document.querySelector('.btn_1');

const modalBg = document.querySelector('.modal-bg');

const modalClose = document.querySelector('.modal-close');

buttonlogin.addEventListener('click',function() {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active');
});
