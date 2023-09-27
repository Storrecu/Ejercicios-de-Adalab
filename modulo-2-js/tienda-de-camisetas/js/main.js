'use strict';
//Variables para traer elementos de HTML al archivo JS:
const cardsContainer = document.querySelector('.js-cards');

//Función plantilla para las tres camisetas:
function getProductHtmlCode(name, price, imageUrl) {
  let htmlCode = `<article class="card">`;
  htmlCode += `<img src=${imageUrl} class="card__img" alt=${name}>`;
  htmlCode += `<h3 class="card__title">${name}/h3>`;
  htmlCode += `<p class="card__description">${price}</p>`;
  htmlCode += `<span>---</span>`;
  htmlCode += `<button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;

  return htmlCode;
}

//Función para llamar a la plantilla y ponerle la información personalizada para cada producto:
function paintProducts() {
  const productOne = getProductHtmlCode(
    'Node JS<',
    '12,00€',
    './images/node-js.jpg'
  );

  const productTwo = getProductHtmlCode(
    'Javascript',
    '13,00€',
    './images/javascript.jpg'
  );
  const productThree = getProductHtmlCode(
    'React JS',
    '15,00€',
    './images/react.jpg'
  );

  cardsContainer.innerHTML = productOne + productTwo + productThree;
}

paintProducts();
