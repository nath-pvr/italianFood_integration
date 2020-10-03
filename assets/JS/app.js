const burger = document.getElementById('burger');
const header = document.querySelector('header');

burger.addEventListener('click',e => {
    e.preventDefault();
    header.classList.toggle('with--sidebar');
});