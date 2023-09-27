'use strict';

/*
Crea un objeto que sea una cesta de peras y que debe tener varias propiedades:
Número máximo de peras
Número mínimo de peras
Número actual de peras
Número inicial de peras

Y varios métodos que hagan:
Añadir al cesto una pera
Sacar del cesto una pera
Restablecer el número de peras al valor inicial.

Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente.
*/

//INPUTS DEL HTML:
const pearsMax = document.querySelector('.js-max');
const pearsMin = document.querySelector('.js-min');
const pearsAct = document.querySelector('.js-act');
const pearsInit = document.querySelector('.js-init');

//BOTONES DEL HTML:
const btnAdd = document.querySelector('.js-btn-add');
const btnRemove = document.querySelector('.js-btn-remove');
const btnRestart = document.querySelector('.js-btn-restore');

//CÓDIGO:
const pearBox = {
  maximo: 10,
  minimo: 1,
  actual: 0,
  inicial: 0,
};

//AÑADIMOS EL VALOR DEL OBJETO A CADA ELEMENTO DEL HTML:
pearsMax.innerHTML += pearBox.maximo;
pearsMin.innerHTML += pearBox.minimo;
pearsAct.innerHTML += pearBox.actual;
pearsInit.innerHTML += pearBox.inicial;

//FUNCIONES:
const handleClickAdd = () => {
  console.log(pearsAct < pearsMax);
  if (pearBox.actual < pearBox.maximo) {
    pearBox.actual = pearBox.actual + 1;
    pearsAct.innerHTML = pearBox.actual;
  }
};
const handleClickRemove = () => {
  if (pearBox.actual > pearBox.minimo) {
    pearBox.actual = pearBox.actual - 1;
    pearsAct.innerHTML = pearBox.actual;
  }
};
const handleClickRestart = () => {
  pearBox.actual === pearBox.inicial;
  pearsAct.innerHTML = pearBox.inicial;
};

//EVENTOS:
btnAdd.addEventListener('click', handleClickAdd);
btnRemove.addEventListener('click', handleClickRemove);
btnRestart.addEventListener('click', handleClickRestart);
