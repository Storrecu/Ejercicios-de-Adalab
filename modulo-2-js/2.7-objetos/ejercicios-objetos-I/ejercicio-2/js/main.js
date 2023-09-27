'use strict';

const message = document.querySelector('.js-message');

const adalaber1 = {
  nombre: 'Susana',
  edad: '34 años',
  profesion: 'periodista',
  run: {
    runMarathon: (distance) =>
      `Estoy corriendo un maratón de ${distance} kilómetros`,
  },
};

message.innerHTML = `Mi nombre es ${adalaber1.nombre}, tengo ${adalaber1.edad} y soy ${adalaber1.profesion}`;
console.log(adalaber1.run.runMarathon(50));
