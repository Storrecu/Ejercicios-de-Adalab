'use strict';

const adalaber1 = {
  nombre: 'Susana',
  edad: '34 años',
  profesion: 'periodista',
  showBio: function () {
    return `Mi nombre es ${adalaber1.nombre}, tengo ${adalaber1.edad} y soy ${adalaber1.profesion}.`;
  },
};

console.log(adalaber1.showBio());

const adalaber2 = {
  nombre: 'Rocio',
  edad: '25 años',
  profesion: 'actriz',
  showBio: function () {
    return `Mi nombre es ${adalaber2.nombre}, tengo ${adalaber2.edad} y soy ${adalaber2.profesion}`;
  },
};

console.log(adalaber2.showBio());
