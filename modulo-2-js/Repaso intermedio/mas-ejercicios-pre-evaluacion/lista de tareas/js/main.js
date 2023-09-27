'use strict';

/*
1. traer al JS los elementos de HTML que necesitaré para ejecutar el programa: 

- el input, para poder usar su value
- el botón add para añadir tareas
- el ul, que almacenará los li, las tareas que añada el usuario

2. añadir evento listener en el botón "Add"
3. crear la función que creará la tarea y la guardará dentro del ul, añadirla a la función manejadora.

4. marcar la tarea como completada 
5. añadir X para cerrar tarea
6. eliminar tarea

7. los puntos 4,5, y 6 se incluirán en la función manejadora del event listener de la ul.
*/

// VARIABLES:
const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const list = document.querySelector('.js-list');

// FUNCIÓN PARA CREAR TAREAS CON BOTÓN X + CHECKBOX:
const addTask = () => {
  const listElement = `
  <li> <input type="checkbox"> ${input.value} <button class="remove">X</button></li>`;
  return listElement;
};

// FUNCIÓN MANEJADORA AL HACER CLICK EN EL BOTÓN ADD:
const handleClick = () => {
  list.innerHTML += addTask();
  input.value = '';
};

// FUNCIÓN MANEJADROA AL HACER CLICK EN LOS LI DEL UL + FUNCIÓN PARA CERRAR/QUITAR LAS TAREAS CREADAS:
const handleList = (event) => {
  if (event.target.classList.contains('remove')) {
    event.target.parentElement.remove();
  }
};

// EVENTOS:
btn.addEventListener('click', handleClick);
list.addEventListener('click', handleList);
