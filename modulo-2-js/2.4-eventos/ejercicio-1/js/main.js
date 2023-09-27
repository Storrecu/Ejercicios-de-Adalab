'use strict';

const formBtn = document.querySelector('.js-btn');

const inputInfo = document.querySelector('.js-input');

formBtn.addEventListener('click', () => {
  console.log(`Hola ${inputInfo.value}`);
});
