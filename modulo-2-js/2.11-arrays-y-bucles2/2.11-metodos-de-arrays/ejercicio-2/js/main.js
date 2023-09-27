'use strict';

/*
const lostNumbers = [4, 8, 15, 16, 23, 42];
Vamos a crear una función bestLostNomber que nos devuelve algunos números del array de los números de la serie Lost que tenemos arriba. La función, debe seguir estos pasos:

1- Crear un nuevo array que contiene solo los números pares que hay en lostNumbers. 
Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers para al encontrar un número par, meterlo en el nuevo array.

2- Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers, de una forma similar al anterior.
Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.
Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.
*/

//FUNCIÓN PARA ALMACENAR NÚMEROS PARES EN UN NUEVO ARREGLO:
const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNomber(arr) {
  let oddLostNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      oddLostNumbers.push(arr[i]);
    }
  }
  return oddLostNumbers;
}

// const bestLostNomber2 = (arr) => arr.filter((x) => x % 2 === 0);

const bestLostNomber2 = (arr) => {
  let newArray = [];
  newArray = arr.filter((num) => {
    return num % 2 === 0;
  });
  return newArray;
};

//FUNCIÓN PARA ALMACENAR NÚMEROS MÚLTIPLOS DE 3 EN UN NUEVO ARREGLO:
const resultBest = bestLostNomber(lostNumbers);
console.log(resultBest);
console.log(bestLostNomber2(lostNumbers));

function notBadLostNombers(arr) {
  let evenLostNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      evenLostNumbers.push(arr[i]);
    }
  }
  return evenLostNumbers;
}

const notBadResult = notBadLostNombers(lostNumbers);
console.log(notBadResult);

//MOSTRAR CONCATENACIÓN DEL PRIMER ARREGLO DE NÚMEROS PARES CON EL SEGUNDO ARREGLO DE NÚMEROS MULTIPLOS DE 3:
console.log(resultBest.concat(notBadResult));
