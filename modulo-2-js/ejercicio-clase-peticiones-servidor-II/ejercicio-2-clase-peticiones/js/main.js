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
