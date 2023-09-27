'use strict';

/*
1. Chihuahas, chihuahas por todas partes
Sigamos trabajando con el API que muestra una imagen aleatoria de un perrito Dog API para crear una página que muestre fotos sólo de perros de la raza chihuahua
Consulta la documentación de esta API específicamente puedes hacer la petición a la siguiente url: https://dog.ceo/api/breed/chihuahua/images/random. Primero verifica en tu navegador que devuelve esta petición.
Añade un botón a la página con el título 'Enséñame un Chihuahua' que al pulsarlo se haga una petición al servidor de una imagen aleatoria y aparezca una imagen de un Chihuahua. Añade una nueva función getChihuahua() que incluya esta petición(puedes basarte en el ejemplo de la clase).
*/

function getPug() {
  fetch('https://dog.ceo/api/breed/pug/images/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perrito';
    });
}

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getPug);
