'use strict';
//EJERCICIO 1:

const listElement = document.querySelector('.js-list');
const listContent = `
<li> <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/14EC6/production/_124820758_pug1.jpg" alt=""> <p>"Dina"</p></img></li>
<li> <img src="https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg" alt=""> <p>"Luna"</p></img></li>
<li> <img src="https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg" alt=""> <p>"Lana"</p></img></li>
`;
listElement.innerHTML = listContent;

const firstDogImage = `<img
    src="https://ichef.bbci.co.uk/news/640/cpsprodpb/14EC6/production/_124820758_pug1.jpg"
    alt="perro raza pug"
  ></img>`;
const firstDogName = `<p>"Dina"</p>`;

const secondDogImage = `<img
    src="https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg"
    alt="Un cachorro de border collie"
  ></img>`;
const secondDogName = `<p>"Luna"</p>`;

const thirdDogImage = `<img
    src="https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg"
    alt="Una perrita mestiza"
  ></img>`;
const thirdDogName = `<p>"Lana"</p>`;

const firstDog = `${firstDogImage} ${firstDogName}`;
const secondDog = `${secondDogImage} ${secondDogName}`;
const thirdDog = `${thirdDogImage} ${thirdDogName}`;

const listContents = firstDog + ' ' + secondDog + ' ' + thirdDog;

listElement.innerHTML = listContents;

// EJERCICIO 2:
const textContainer = document.querySelector('.js-p');

const partnerName = 'María Laura Luraschi';
const nameLenght = partnerName.length;

const finalSentence = `El nombre de mi compañera es ${partnerName} y está compuesto por ${nameLenght} caracteres.`;

textContainer.innerHTML = finalSentence;

//EJERCICIO 3:
2 + 3 + '5';
('55'); //Primero hace la operación, lo pasa a string y lo une al otro string
typeof '55';
('string');
'2' + 3 + 5;
('235'); //Aquí, como empieza en string, lo considera todo string.
typeof '235';
('string');

123;
123;
typeof 123; //los number en la consola de chrome se muestran de color verde
('number');
('123');
('123');
typeof '123'; //los strings en la consola de chrome, se muestran de color naranja
('string');
