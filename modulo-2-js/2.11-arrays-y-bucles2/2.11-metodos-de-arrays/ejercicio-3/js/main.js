'use strict';
/*
3. Mi lista de tareas
Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos creado un objeto literal con el listado de tareas y su estado. Nuestra misión es:

1-Mostrar una frase que indique cuántas tareas hay.
2-Pintar todas las tareas en pantalla.
3-Tachar las ya realizadas.
4-Permitir marcar una tarea como 'completa' o 'incompleta'.
5-Vamos a partir de este array de datos en nuestro fichero JavaScript:
const tasks = [
  {name: 'Recoger setas en el campo', completed: true},
  {name: 'Comprar pilas', completed: true},
  {name: 'Poner una lavadora de blancos', completed: true},
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];
Veamos cómo afrontar un ejercicio de este tipo, dónde tenemos que unir muchos de los conceptos aprendidos hasta ahora, la organización es clave:

a) Vamos a por una tarea. Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.

b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.

c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
la tarea debe mostrarse como completada (tachada)
debemos modificar su estado (propiedad completed) en el array tasks.

d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberíamos actualizar esta información.
*/

//OBJETOS Y OTROS:
const tasks = [
  { name: 'Recoger setas en el campo', completed: true, id: 0 },
  { name: 'Comprar pilas', completed: true, id: 1 },
  { name: 'Poner una lavadora de blancos', completed: true, id: 2 },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
    id: 3,
  },
];

//VARIABLES, FUNCIONES Y EVENTOS PARA LA CASILLA DE AÑADIR TAREA:
const btn = document.querySelector('.js-btn');
const field = document.querySelector('.js-input');
const msg = document.querySelector('.js-msg');

function handleClick() {
  const fieldValue = field.value || 'tarea random';
  const newItem = { name: fieldValue, completed: false };
  field.value = '';
  tasks.push(newItem);
  renderTaskList();
}

btn.addEventListener('click', handleClick);

//VARIABLES DEL HTML:
const taskList = document.querySelector('.js-list');

//FUNCIÓN QUE PINTA TODAS LAS TAREAS DEL ARRAY EN EL HTML, AÑADE LA CLASE TACHADO A LOS LI Y ASIGNA UNA ID A CADA INPUT PARA RELACIONAR EL CHECKBOX CON LA INFORMACIÓN DEL OBJETO: En este punto JS todavía no entiende que esa Id que hemos puesto a los inputs, debe estar asociado con X objeto contenido en el array.
function renderTaskList() {
  let tasksCompleted = 0;
  let tasksNoCompleted = 0;
  taskList.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      taskList.innerHTML += `<li class="strike js-list-element"> <input class="js-check" type="checkbox" id="${i}" checked> ${tasks[i].name} <button class="remove">X</button> </li>`;
      tasksCompleted++;
    } else {
      taskList.innerHTML += `<li class="js-list-element"> <input class="js-check" id="${i}" type="checkbox" > ${tasks[i].name} <button>X</button> </li>`;
      tasksNoCompleted++;
    }
  }
  listenerCheckBox();
}

//FUNCIÓN PARA APLICAR LISTENER A TODOS LOS CHECKBOX:
function listenerCheckBox() {
  const listChechkbox = document.querySelectorAll('.js-check');
  for (const eachCheckbox of listChechkbox)
    eachCheckbox.addEventListener('click', handleClickChecks);
}

//FUNCIÓN MANEJADORA CUANDO HACEMOS CLICK EN LOS CHECKBOX:Aquí cambiaremos el valor de la propiedad clicada: completed true/false.
//Así relacionamos el click del usuario con la tarea y su ID. Con esta función el completed pasa de true a false.
function handleClickChecks(event) {
  const index = event.target.id; // const index representa el índice y queremos cambiar el array en ese elemento
  tasks[index].completed = !tasks[index].completed;
  renderTaskList();
}

renderTaskList();

// 1. X de quitar tarea
// 2. Mostrar mensaje de cuantas tareas hay total, hechas y pendientes
