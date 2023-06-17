const navBar = document.querySelector('.logo');
const navList = document.querySelector('.nav-list');

navBar.addEventListener('click', () => {
    navList.classList.toggle('toggled');
});