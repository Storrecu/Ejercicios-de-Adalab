'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20,
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21,
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22,
      },
    ],
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23,
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24,
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25,
      },
    ],
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26,
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27,
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28,
      },
    ],
  },
];

// const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];
const list = document.querySelector('.js-result');

/*EJERCICIO 1: NOMBRE DE LAS PROMOS.

function getPromoName() {
  for (let i = 0; i < promos.length; i++) {
    const listElement = `<li> ${promos[i].name} </li>`;
    list.innerHTML += listElement;
  }
}
getPromoName();
*/

/*EJERCICIO 2: LETRA DE LAS PROMOS + NOMBRE PROMOS.

function getLetterPromo() {
  for (let i = 0; i < promos.length; i++) {
    const listElement = `<li> <p>${promos[i].promo}</p> <p>${promos[i].name}</p> </li>`;
    list.innerHTML += listElement;
  }
}
getLetterPromo();
*/

/*EJERCICIO 3: LETRA DE LAS PROMOS, NOMBRE DE LAS PROMOS Y NÚMERO ALUMNAS.

function getNumberStudents() {
  for (let i = 0; i < promos.length; i++) {
    const listElement = `<li> <p>${promos[i].promo}</p> <p>${promos[i].name}</p> <p>${promos[i].students.length}</p></li>`;
    list.innerHTML += listElement;
  }
}
getNumberStudents();
*/

/*EJERCICIO 4: NOMBRES PROMOS + NOMBRES Y EDAD ALUMNAS.

function getInfoStudents() {
  let polla = `<ul>`;
  for (let i = 0; i < promos.length; i++) {
    polla += `<li> <p> ${promos[i].name} </p> <ul>`;
    for (let j = 0; j < promos[i].students.length; j++) {
      polla += `<li> ${promos[i].students[j].name} ${promos[i].students[j].age}</li>`;
    }
    polla += `</ul></li>`;
  }
  polla += `</ul>`;
  list.innerHTML = polla;
}
getInfoStudents();
*/

/*EJERCICIO 5: NOMBRE PROMO + NOMBRE, EDAD Y ID ALUMNAS.

function getInfoStudentsTwo() {
  let students = `<ul>`;
  for (let i = 0; i < promos.length; i++) {
    students += `<li> <p> ${promos[i].name}</p> <ul>`;
    for (let j = 0; j < promos[i].students.length; j++) {
      students += `<li> ${promos[i].students[j].id}${promos[i].students[j].name} ${promos[i].students[j].age}`;
    }
    students += `</ul></li>`;
  }
  students += `</ul>`;
  list.innerHTML += students;
}

getInfoStudentsTwo();
*/

/*EJERCICIO 6: NOMBRE PROMO + NOMBRE, ID ALUMNAS Y EDAD PAR.

function getInfoStudentsThree() {
  let students = `<ul>`;
  for (let i = 0; i < promos.length; i++) {
    students += `<li> <p> ${promos[i].name}</p> <ul>`;
    for (let j = 0; j < promos[i].students.length; j++) {
      if (promos[i].students[j].age % 2 === 0) {
        students += `<li> ${promos[i].students[j].id}${promos[i].students[j].name} ${promos[i].students[j].age}`;
      }
    }
    students += `</ul></li>`;
  }
  students += `</ul>`;
  list.innerHTML += students;
}
getInfoStudentsThree();
*/

/*EJERCICIO 7: NOMBRE PROMO + NOMBRE, EDAD, ID ALUMNAS DE GOOGLE.

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

function getInfoStudentsFour() {
  let students = `<ul>`;
  for (let i = 0; i < promos.length; i++) {
    students += `<li> <p> ${promos[i].name}</p> <ul>`;
    for (let j = 0; j < promos[i].students.length; j++) {
      if (studentsWorkingInGoogle.includes(promos[i].students[j].id)) {
        students += `<li> ${promos[i].students[j].id}${promos[i].students[j].name} ${promos[i].students[j].age}`;
      }
    }
    students += `</ul></li>`;
  }
  students += `</ul>`;
  list.innerHTML += students;
}
getInfoStudentsFour();
*/

//EJERCICIO 8: PINTARLO TODO EN EL HTML Y HACER QUE SE AÑADA LA ID CUANDO HACEMOS CLICK EN ALGUNA ALUMNA.

let students = '';
function getInfoStudentsFive() {
  let students = `<ul>`;
  for (let i = 0; i < promos.length; i++) {
    students += `<li> <p> ${promos[i].name}</p> <ul>`;
    for (let j = 0; j < promos[i].students.length; j++) {
      students += `<li>${promos[i].students[j].name} ${promos[i].students[j].age}`;
    }
    students += `</ul></li>`;
  }
  students += `</ul>`;
  list.innerHTML += students;
}
getInfoStudentsFive();
logStudentId();

const logStudentId = function (ev) {
  console.log('Current target:', ev.currentTarget);
  console.log('Target:', ev.target);
  if (ev.target) {
    students = promos[i].students[j].id;
  }
  // coger el id del evento ev.target o del ev.currentTarget
  // y luego pintarlo en consola
};

list.addEventListener('click', logStudentId);
