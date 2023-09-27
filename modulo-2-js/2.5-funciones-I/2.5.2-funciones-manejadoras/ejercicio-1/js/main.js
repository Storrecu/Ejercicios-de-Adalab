'use strict';

const result = document.querySelector('.js-result');
const btnAdd = document.querySelector('.js-btn-add');
const btn = document.querySelector('.js-btn-remove');
let number = 0;

const handleClickAdd = (event) => {
  event.preventDefault();
  result.innerHTML = number++;
};

const handleClickRemove = (event) => {
  event.preventDefault();
  result.innerHTML = number--;
};

btnAdd.addEventListener('click', handleClickAdd);
btn.addEventListener('click', handleClickRemove);
