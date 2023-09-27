'use strict';

// EJERCICIO 1
const titleElement = document.querySelector('h1');
titleElement.textContent = 'Esto es una prueba';

// EJERCICIO 2
const mainTitle = document.querySelector('h1');
const listItem = document.querySelector('.list > .name2');

mainTitle.textContent += ' ' + listItem.textContent;

// EJERCICIO 3
const web = document.querySelector('div');
const contentWeb =
  '<h1>"Lorem ipsum"</h1> <img src="http://via.placeholder.com/350x150"></img> <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit"</p>';

web.innerHTML = contentWeb;

// EJERCICIO 4

const changeOpacity = document.querySelector('.btn-2');

changeOpacity.classList.add('hidden');

const welcomeParagraph = document.querySelector('.welcomeText');

console.log('welcomeParagraph: ', welcomeParagraph);

welcomeParagraph.innerHTML = 'Bienvenida Adalaber';
