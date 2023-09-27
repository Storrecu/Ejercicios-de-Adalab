'use strict';

/*
Crea una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.

Crea una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.
*/

let arr = [];
function get100Numbers() {
  for (let i = 0; i <= 100; i++) {
    arr.push(i);
  }
  return arr;
}
let finalResult = get100Numbers();
console.log(finalResult);

function getReversed100Numbers() {
  for (let i = 0; i <= 100; i++) {
    arr.reverse(i);
  }
  return arr;
}

let reversedArray = getReversed100Numbers();
console.log(reversedArray);
