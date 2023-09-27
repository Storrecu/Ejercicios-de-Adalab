'use strict';

/*
1. 1, 2, 3, lo hacemos otra vez
Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. 
Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML.
*/

const list = document.querySelector('.js-list');
const newItem1 = document.createElement('li');
const newItem2 = document.createElement('li');
const newItem3 = document.createElement('li');

const numbers = [1, 2, 3];

newItem1.textContent = '1';
newItem2.textContent = '2';
newItem3.textContent = '3';

list.appendChild(newItem1),
  list.appendChild(newItem2),
  list.appendChild(newItem3);
