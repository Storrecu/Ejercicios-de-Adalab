'use strict';

const p = document.querySelector('.js-p');

p.addEventListener('click', () => {
  const newP = document.createElement('p');
  newP.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam neque soluta explicabo nobis consectetur aperiam, inventore, consequatur aliquid facere earum ex repudiandae error omnis blanditiis saepe fugit maxime voluptates expedita.';

  document.body.appendChild(newP);
});
