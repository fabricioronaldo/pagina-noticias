const button_menu = document.querySelector('.header__menu')
const menu = document.querySelector('.menu')
const open = document.getElementById('img').src;

button_menu.addEventListener('click', () => {
    menu.classList.toggle('menu--ativo')
})

function icon(objeto){

    if(document.getElementById(objeto).src != "./assets/images/icon-menu.svg") {
        document.getElementById(objeto).src = "./assets/images/icon-menu-close.svg";    
    }else {
        document.getElementById(objeto).src = "./assets/images/icon-menu.svg";
    }

    
}