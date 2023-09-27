'use strict';

//VARIABLES:
const btn = document.querySelector('.js-update');
const face = document.querySelector('.js-face');
const select = document.querySelector('.js-select-face');
const container = document.querySelector('.js-container');

//FUNCIÓN PARA CAMBIAR EL CONTENIDO HTML DE LA ETIQUETA QUE GUARDARÁ LA CARITA:
function changeFace() {
  let selectValue = select.value;
  face.innerHTML = selectValue;
}

//FUNCIÓN PARA OBTENER UN NÚMERO RANDOM:
const getRandomNumber = function () {
  const randomNumber = parseInt(Math.random() * 10);
  return randomNumber;
};

//FUNCIÓN PARA CAMBIAR EL COLOR DE FONDO EN FUNCIÓN DEL NÚMERO RANDOM:
function changeBackground() {
  const randomNumber = getRandomNumber();
  container.classList.remove('correct-yellow-color');
  container.classList.remove('chilean-fire-color');
  if (randomNumber % 2 === 0) {
    container.classList.add('correct-yellow-color');
  } else {
    container.classList.add('chilean-fire-color');
  }
}

//FUNCIÓN MANEJADORA DE EVENTO QUE CONTENDRÁ A LAS FUNCIONES DE CHANGEFACE Y CHANGEBACKGROUND:
function handleUpdateClick() {
  changeFace();
  changeBackground();
}

//EVENTOS:
btn.addEventListener('click', handleUpdateClick);
