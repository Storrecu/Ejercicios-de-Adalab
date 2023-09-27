'use strict';

/*
2. De viaje
Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
Haz lo mismo para París y Nueva York
Nota: Usa imágenes que encuentres por Internet.
*/

const select = document.querySelector('.js-list');
const images = document.querySelectorAll('.js-img');

function getImagesEachCountry(event) {
  const optionChosen = event.target.value;
  if (optionChosen === 'Madrid') {
    images.src = url();
  }
}

const handleOptions = () => {};

select.addEventListener('change', handleOptions);
