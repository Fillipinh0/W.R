const menuDesktop = document.querySelector('.menu_desktop');
const menuMobile = document.querySelector('.menu_mobile');

const buttonMobile = document.querySelector('.icone_menu_mobile');
const buttonDesktop = document.querySelector('.icone_menu_desktop');


buttonMobile.addEventListener('click', function()  {
    menuMobile.classList.toggle('active');
});
buttonDesktop.addEventListener('click', function()  {
    menuDesktop.classList.toggle('active');
});