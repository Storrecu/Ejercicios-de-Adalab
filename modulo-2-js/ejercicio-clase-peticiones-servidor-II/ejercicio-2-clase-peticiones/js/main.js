'use strict';
//Pintaremos un listado de personajes de Marvel con nombre y foto.
//Usaremos esta api: gateway.marvel.com/v1/public/

//https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=b819d866c81b5bd4e0cc05f9a943dba5&hash=d2920bc5270a5ef5760c5a3b1ce3e506

//Lo normal es regustrarse en esa web y recibir en el correo la api key para acceder.

//pasos:
/* 
1.- obtener los datos del servidor
2.-aplicar un map para simplificar el objeto 
3.-guardar los datos en el localStorage.
4.-pintar en el HTML
*/

const ulElement = document.querySelector('.js-list');
let characters = [];
function getDaTaApi() {
  fetch(
    'https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=b819d866c81b5bd4e0cc05f9a943dba5&hash=d2920bc5270a5ef5760c5a3b1ce3e506'
  )
    .then((response) => response.json())
    .then((info) => {
      console.log(info);
      characters = info.data.results.map((eachCharacter) => ({
        id: eachCharacter.id,
        name: eachCharacter.name,
        image:
          eachCharacter.thumbnail.path +
          '.' +
          eachCharacter.thumbnail.extension,
      }));
      localStorage.setItem('marvelCharacters', JSON.stringify(characters));
      console.log(characters);
      render();
    });
}

//Pintaremos los personajes que hemos guardado en localStorage en el HTML:
function render() {
  for (const char of characters) {
    ulElement.innerHTML += `<li> 
    <img src="${char.image}" width="100px"/>
    <p> ${char.name}</p>
    </li>`;
  }
}

// así se pintan los personajes, pero no se están pintando por el local storage se están llamando por el fetch de arriba. Haremos lo siguiente:
//Al sacar el string del local storage tenemos que transformarlo a tipo array o objeto.
//Al sacar cosas del local storage hay que hacer un condicional:

//ESTO ES EL ADAKITTEN DE HOY!!!
const dataLS = JSON.parse(localStorage.getItem('marvelCharacters'));

if (dataLS !== null) {
  characters = dataLS;
  render();
} else {
  getDaTaApi();
}

// //buscamos al favorito en la lista a aprtir del id con find
function handleClickShow(event) {
  const idShowClicked = event.currentTarget.id;
  idShowClicked.classList.add('fav');
  let foundShow = showsList.find((item) => item.show.id === idShowClicked);

//   //comprobar si está en el listado de favoritos, si no está la añade y si está la quitará:
//   const indexFav = favList.findIndex((item) => item.show.id === idShowClicked);
//   if (indexFav === -1) {
//     favList.push(foundShow);
//   } else {
//     favList.splice(indexFav, 1);
//   }
// }

















// function isCache() {
//   const dataLS = JSON.parse(localStorage.getItem('definitiveCard'));

//   if (dataLS !== null) {
//     responseJSON = dataLS;
//   } else {
//     handleBtnShare();
//   }
// }
// isCache();


// // código del preview
// //CONSTANTES DE LOS INPUTS PALETA COLORES
// const inputPaletteOne = document.querySelector('.js-input-palette-one');
// const inputPaletteTwo = document.querySelector('.js-input-palette-two');
// const inputPaletteThree = document.querySelector('.js-input-palette-three');
// //CONSTANTES DE LOS INPUTS
// const inputName = document.querySelector('.js-input-name');
// const inputJob = document.querySelector('.js-input-job');
// const inputPhone = document.querySelector('.js-input-phone');
// const inputEmail = document.querySelector('.js-input-email');
// const inputLinkedin = document.querySelector('.js-input-linkedin');
// const inputGithub = document.querySelector('.js-input-github');
// const inputPhoto = document.querySelector('.js-input-photo');

// //EVENTOS LISTENER PARA LAS PALETAS DE COLORES:
// inputPaletteOne.addEventListener('focusout', function () {
//   console.log(data);
//   cache.setItem('colorOne', inputPaletteOne.value);
// });
// inputPaletteTwo.addEventListener('focusout', function () {
//   cache.setItem('colorTwo', inputPaletteTwo.value);
// });
// inputPaletteThree.addEventListener('focusout', function () {
//   cache.setItem('colorThree', inputPaletteThree.value);
// });

// //EVENTOS LISTENER PARA LAS CASILLAS INPUT:
// inputName.addEventListener('focusout', function () {
//   cache.setItem('name', inputName.value);
// });
// inputJob.addEventListener('focusout', function () {
//   cache.setItem('job', inputJob.value);
// });
// inputPhone.addEventListener('focusout', function () {
//   cache.setItem('phone', inputPhone.value);
// });
// inputEmail.addEventListener('focusout', function () {
//   cache.setItem('email', inputEmail.value);
// });
// inputEmail.addEventListener('focusout', function () {
//   cache.setItem('email', inputEmail.value);
// });

// // inputLinkedin
// // inputGithub;
// inputPhoto;