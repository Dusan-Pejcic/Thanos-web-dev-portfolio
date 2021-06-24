console.log('hoooiiii');

const hamburger = document.querySelector('.hamburger');
const menuCloseBtn = document.querySelector('.close');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
    menu.classList.add('clicked');
});
menuCloseBtn.addEventListener('click', () => {
    menu.classList.remove('clicked');
});