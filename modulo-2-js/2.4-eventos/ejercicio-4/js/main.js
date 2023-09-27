'use strict';

const div = document.querySelector('.js-background');
window.addEventListener('scroll', () => {
  const position = 250;

  if (window.scrollY < position) {
    div.classList.add('class-1');
    console.log(1);
  } else if (window.scrollY > position) {
    div.classList.remove('class-2');
    div.classList.add('class-3');
    console.log(3);
  }
});

const btn = document.getElementsByClassName('btn');
const fnc = (e) => {
  console.log('e.taget > ', e.target.value);
};

btn[0].addEventListener('click', fnc);
btn[1].addEventListener('click', fnc);
btn[2].addEventListener('click', fnc);
btn[3].addEventListener('click', fnc);
