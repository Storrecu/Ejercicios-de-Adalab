'use strict';

//EJERCICIO: Cuando cargue la página la información del input debe mostrarse con la info guardada en localStorage:

const titleInput = document.querySelector('.js-title');

//Keyup, change, input

// const handleInput = (ev) => {
//   //recogemos el valor del input:
//   // const value = titleInput.value;
//   //podemos hacerlo con target:
//   const value = ev.target.value;

//   //getters y setters
//   localStorage.setItem('titleUser', value);
//   //Aquí seteamos la info del input en localStorage por primera vez, si queremos usarla, tendremos que hacer un getter, creando una variable(L20):
// };

const handleInput = (ev) => {
  const value = ev.target.value; // en este caso es igual al current target (ev.currentTarget.value;)
  localStorage.setItem('titleUser', value);
};

titleInput.addEventListener('input', handleInput);

// const localTitle = localStorage.getItem('titleUser');
// //Queremos poner el valor de localTitle en la variable titleInput:
// //-condicional y variable. En el condicional pondremos si el valor del input es diferente de null. La variable debe estar definida antes del if.Ç
// // Ponemos el condicional porque no queremos que el valor del input sea null.
// console.log(localTitle); // eso es null.

// if (localTitle !== null) {
//   titleInput.value = localTitle;
// } // cuando el valro del input sea diferente de nulo, el input se rellenará con la información del localstorage.

function getDataLocal() {
  const localTitle = localStorage.getItem('titleUser');
  titleInput.value = localTitle;
  console.log(localTitle);

  if (localTitle !== null) {
    titleInput.value = localTitle;
  }
}
getDataLocal();
//hacemos un operador ternario: equivalente al condicional que hemos hecho arriba. Lo usaremos para asignar un valor a una variable, dependiendo de una condición.
//titleInput.value = localTitle !== null ? localTitle : '';
