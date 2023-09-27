'use strict';

/*
1.Manipulación de DOM básica:
Crea un botón en HTML y usa JavaScript para cambiar el texto del botón cuando se hace clic en él.

2.Condicionales:
Escribe una función que tome un número como argumento y devuelva "Es positivo" si el número es mayor que cero, "Es negativo" si es menor que cero y "Es cero" si es igual a cero.

3.Eventos:
Crea una página con un elemento <div>. Cuando el usuario pase el cursor sobre el <div>, cambia su color de fondo.

4.Funciones y arrow functions:
Crea una función que acepte dos números como argumentos y devuelva su suma. Luego, convierte esa función en una arrow function.

5.Objetos:
Crea un objeto llamado "persona" con propiedades como "nombre", "edad" y "ocupación". Luego, muestra estas propiedades en la consola.
*/

/* 1. Manipulación de DOM básica:

const btn = document.querySelector('.js-btn');

const handleClick = () => {
  btn.innerHTML = '¡Has picado!';
};

btn.addEventListener('click', handleClick);
*/

/* 2. Condicionales:
function positiveOrNot(num) {
  if (typeof num !== 'number') {
    return 'El valor no es un número';
  } else if (num > 0) {
    return 'Es positivo';
  } else if (num < 0) {
    return 'Es negativo';
  } else {
    return 'Es cero';
  }
}
const resultado = positiveOrNot('wd');
console.log(resultado);
*/

/*3. Eventos:

const div = document.querySelector('.js-div');

const mouseOver = () => {
  div.style.backgroundColor = 'red';
};

const mouseOut = () => {
  div.style.backgroundColor = 'aqua';
};

const handleMouse = () => {
  mouseOver();
};

const handleMouseOut = () => {
  mouseOut();
};

div.addEventListener('mouseover', handleMouse);
div.addEventListener('mouseout', handleMouseOut);

Si sólo queremos una función para que cambie de color al poner el ratón encima pero qu eno vuelva a su estado anterior podemos hacer:

const handleMouse = (event) => {
event.target.style.backgroundColor = "red";

}
*/

/* 4. Funciones y arrow functions:

function twoNumbers(numOne, numTwo) {
  return numOne + numTwo;
}

const twoNumbers = (numOne, numTwo) => numOne + numTwo;
const resultado = twoNumbers(3, 5);
console.log(resultado);
*/

/*5. Objetos

const persona = {
  nombre: 'Silvia',
  edad: '30 años',
  ocupacion: 'estudiante',
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ocupacion);
*/
