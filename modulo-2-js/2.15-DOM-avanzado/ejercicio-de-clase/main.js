'use strict';

const data = [
  {
    id: '134',
    title: 'Título 1',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nulla, fuga aliquid expedita corrupti officia ipsa. Impedit mollitia atque, aspernatur a eveniet accusantium rerum, doloribus temporibus placeat nisi neque distinctio?',
    img: 'https://placekitten.com/200/300',
    autor: 'Nuria',
  },
  {
    id: '337n',
    title: 'Título 1',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nulla, fuga aliquid expedita corrupti officia ipsa. Impedit mollitia atque, aspernatur a eveniet accusantium rerum, doloribus temporibus placeat nisi neque distinctio?',
    img: 'https://placekitten.com/200/300',
    autor: 'Nuria',
  },
  {
    id: '3567u',
    title: 'Título 1',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nulla, fuga aliquid expedita corrupti officia ipsa. Impedit mollitia atque, aspernatur a eveniet accusantium rerum, doloribus temporibus placeat nisi neque distinctio?',
    img: 'https://placekitten.com/200/300',
    autor: 'Nuria',
  },
];
//getAtribute --> da el valor de un atributo
//setAtribute --> asignamos el valor de un atributo
//haremos un bucle para recorrer el array, donde ítem es cada uno de los objetos que componen el array:

const ulElement = document.querySelector('.js-list');
const gatosAdoptados = []; //al hacer click en uno, lo meteremos en este array.Usaremos el metodo find y luego lo añadiremos.

function handleClick(ev) {
  console.log('He clicado el li');
  // console.log(ev.target); Elemento sobre el que la usuaria hace click
  console.log(ev.currentTarget); // elemento que tiene listener
  console.log(ev.currentTarget.dataset.autor);
  console.log(ev.currentTarget.dataset.idElement);
  const clickedElement = ev.currentTarget.dataset.idElement;
  const findCat = data.find((cat) => cat.id === clickedElement);
  gatosAdoptados.push(findCat);
  console.log(gatosAdoptados);
}

for (const item of data) {
  const liElement = document.createElement('li');
  ulElement.appendChild(liElement);
  liElement.dataset.idElement = item.id; // cuando creo el elemento puedo ponerle el evento inmediatamente
  liElement.addEventListener('click', handleClick);

  //crear el article:
  const articleElement = document.createElement('article');
  articleElement.setAttribute('class', 'card'); //asignamos el atributo class con su valor
  liElement.appendChild(articleElement);

  //crear la imagen:
  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', item.img);
  imgElement.setAttribute('alt', 'gatitos'); // falta que le indiquemos quien es su padre, si no no se pintará en el HTML
  articleElement.appendChild(imgElement);

  //crear el h3:
  const h3Element = document.createElement('h3');
  const texth3 = document.createTextNode(item.title);
  h3Element.appendChild(texth3);
  articleElement.appendChild(h3Element);

  //crear el p:
  const pElement = document.createElement('p');
  pElement.textContent = item.desc;
  articleElement.appendChild(pElement);
}
