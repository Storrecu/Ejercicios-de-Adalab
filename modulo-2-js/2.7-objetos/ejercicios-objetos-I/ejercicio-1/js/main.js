'use strict';

const message = document.querySelector('.js-message');
const messageTwo = document.querySelector('.js_message-two');

const adalaber1 = {
  nombre: 'Susana',
  edad: '34 años',
  profesion: 'periodista',
};

message.innerHTML = `Mi nombre es ${adalaber1.nombre}, tengo ${adalaber1.edad} y soy ${adalaber1.profesion}`;

const adalaber2 = {
  nombre: 'Rocío',
  edad: '25 años',
  profesion: 'actriz',
};

messageTwo.innerHTML += `Mi nombre es ${adalaber2.nombre}, tengo ${adalaber2.edad} y soy ${adalaber2.profesion}`;
