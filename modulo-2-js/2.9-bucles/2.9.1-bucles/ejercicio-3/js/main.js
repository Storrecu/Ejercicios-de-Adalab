'use strict';

/*
  Usando for...of haz un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.
  */

const submit = document.querySelector('.js-submit');
const answer = document.querySelector('.js-answer');

const handleSubmit = (event) => {
  event.preventDefault();
  const inputOne = document.querySelector('.js-input-one');
  const inputTwo = document.querySelector('.js-input-two');
  answer.innerHTML = '';
  const inputResults = [inputOne.value, inputTwo.value];

  for (const movie of inputResults) {
    answer.innerHTML += `¡A mi también me encantó ${movie}! tenemos mucho en común, humana`;
  }
};

submit.addEventListener('click', handleSubmit);
