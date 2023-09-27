'use strict';

let p = document.querySelector('.js-p');
const input = document.querySelector('.js-input');
input.addEventListener('input', (event) => {
  // p.innerHTML = input.value;
  console.log(event.target.value);
  console.log(event.target.id);
  console.log(input === event.target);
});
