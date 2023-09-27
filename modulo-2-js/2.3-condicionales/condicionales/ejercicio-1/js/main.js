'use strict';

const inputName = document.querySelector('.js_input');
const btn = document.querySelector('.js-btn');

const handleInputName = () => {
  const userValue = inputName.value;
  const nameOK1 = 'Maria';
  const nameOK2 = 'Luisa';
  if (userValue === nameOK1) {
    console.log(`Bienvenida, ${inputName.value}!`);
  } else if (userValue === nameOK2) {
    console.log(`Bienvenida, ${inputName.value}`);
  } else {
    console.log('Acceso restringido, no puedes entrar');
  }
};

btn.addEventListener('click', handleInputName);
