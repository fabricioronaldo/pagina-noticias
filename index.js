const button_menu = document.querySelector('.header__menu')
const menu = document.querySelector('.menu')
const icone = document.querySelector('#img')

button_menu.addEventListener('click', () => {
    menu.classList.toggle('menu--ativo')
    icone.classList.toggle('icon_close')
    
})

