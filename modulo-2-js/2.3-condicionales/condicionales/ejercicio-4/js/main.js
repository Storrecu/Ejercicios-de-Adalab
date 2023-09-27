'use strict';

/*PROBLEMA Y PASOS PARA RESOLVERLO:

PROBLEMA: Cambiar contenido titulo y mensaje. Cuanto tengan una clase X cambiarán su contenido y apariencia.

PASOS: 
 1- traer todos los elementos de HTML a JS
 2- reglas: Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'

 Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'

 Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'

 3- Hacer el evento listener sobre el div.

 4- Para aplicar esas reglas trabajaremos cambiando el contenido de esos del titulo y del parrafo que contiene el div.

 5-Crearemos una fucnión Random, para que en función de los clicks que de el usuario en el div, si es par, impar o múltiple de 3 se añadirá una clase que determinará el estilo y el contenido

6- Dentro de la función manejadora que hay en el evento listener, especificamos que la variable creada en la función random en función de su resultado, añada y quite unas clases así como modifique el contenido del titulo y del parrafo

*/

const msg = document.querySelector('.js-msg');
const title = document.querySelector('.js-title');
const def = document.querySelector('.js-default-msg');

const getRandomNumber = function () {
  const randomNumber = parseInt(Math.random() * 50);
  return randomNumber;
};

const handleMessage = () => {
  const randomNumber = getRandomNumber();
  if (randomNumber % 2 === 0) {
    msg.classList.remove('error');
    msg.classList.remove('warning');
    msg.classList.add('success');
    title.innerHTML = 'CORRECTO';
    def.innerHTML = 'Los datos son correctos';
  } else if (randomNumber % 3 === 0) {
    msg.classList.remove('success');
    msg.classList.remove('error');
    msg.classList.add('warning');
    title.innerHTML = 'AVISO';
    def.innerHTML = 'Tenga cuidado';
  } else {
    msg.classList.remove('success');
    msg.classList.remove('warning');
    msg.classList.add('error');
    title.innerHTML = 'ERROR';
    def.innerHTML = 'Ha surgido un error';
  }
};

msg.addEventListener('click', handleMessage);
