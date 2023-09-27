'use strict';

const createPrromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getBreedImages() {
  const promises = [
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
    createPrromise(),
  ];
  Promise.all(promises).then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      const img = document.querySelector('.dog' + (i + 1));
      img.src = responses[i].message;
    }
  });
}

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedImages);
