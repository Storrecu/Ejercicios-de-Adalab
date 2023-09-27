'use strict';

const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const p = document.querySelector('.js-p');
const oneYear = 15;
const twoYears = 9;
const threeYears = 5;

const handlePetAge = () => {
  const everyYears = oneYear + twoYears + threeYears;
  const age = parseInt(input.value);

  if (age === 1) {
    p.innerHTML = `La edad de tu perro es de ${oneYear} años humanos`;
  } else if (age === 2) {
    p.innerHTML = `La edad de tu perro es de ${
      oneYear + twoYears
    } años humanos`;
  } else if (age === 3) {
    p.innerHTML = `La edad de tu perro es de ${
      oneYear + twoYears + threeYears
    } años humanos`;
  } else {
    p.innerHTML = `La edad de tu perro es de ${
      oneYear + twoYears + threeYears * (age - 2)
    } años humanos`;
  }
};

const handlePetAge2 = () => {
  const age = parseInt(input.value);
  const text = (age) => `La edad de tu perro es de ${age} años humanos`;

  if (age === 1) return (p.innerHTML = text(oneYear));

  if (age === 2) return (p.innerHTML = text(oneYear + twoYears));

  return (p.innerHTML = text(oneYear + twoYears + threeYears * (age - 2)));
};

btn.addEventListener('click', handlePetAge2);
