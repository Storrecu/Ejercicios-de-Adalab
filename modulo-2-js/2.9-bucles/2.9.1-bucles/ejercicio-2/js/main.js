'use strict';

/*
a) Crea un nuevo array numbers que contendrá 5 números cualesquiera y recorre el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitas una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, loguealo en la consola.

b) Añade un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.

c) Crea una función average, que toma como parámetro un array numbers, calcula la media del array (de cualquier longitud) y devuelve la media. Para trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.
*/

//A
let numbers = [1, 2, 3, 4, 5];
let acum = 0;

for (let i = 0; i < numbers.length; i++) {
  acum += numbers[i];
}
const media = acum / numbers.length;
console.log(media);

//B
numbers.push(6);
console.log(numbers);

let acumTwo = 0;

for (let i = 0; i < numbers.length; i++) {
  acumTwo += numbers[i]; //ojo con el símbolo += si pongo = a secas, no se muestra bien el resultado.
}
const mediaTwo = acumTwo / numbers.length;
console.log(mediaTwo);

//C
let count = 0;
const average = (arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    count += arreglo[i];
  }
  return count / arreglo.length;
};

console.log(average([10, 22, 33, 44, 55, 6]));
