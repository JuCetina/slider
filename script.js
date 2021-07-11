/*** Funcionalidad para agregar colores en los botones del slider ***/

//Al cargar la página por primera vez, le cambia el color al primer botón del slider
let firstButton = document.querySelector('.slider__menu-button');
firstButton.style.backgroundColor = '#f9b76b'; 

//Se obtienen todos los botones del slider en un NodeList
let buttons = document.querySelectorAll('.slider__menu-button');

//El resultado se convierte a array para poder utilizar el método .map()
let buttonsArray = [...buttons];

//A cada boton del slider se le agrega un escuchador de evento de click
let buttonClicked = buttonsArray.map(button => button.addEventListener('click', e => {
    //Al dar click, todos los botones se vuelven blancos
    buttonsArray.map(button => button.style.backgroundColor = '#fff');
    //El boton clickeado se vuelve de color #f9b76b
    e.target.style.backgroundColor = '#f9b76b';
}));


