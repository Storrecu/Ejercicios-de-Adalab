'use strict';

/*
2. API de usuarios de GitHub
Ahora vamos a explorar un nuevo API: el API de usuarios de GitHub. La URL de este API es https://api.github.com/users/{username}, donde {username} es el nombre del usuario en GitHub. Por ejemplo, aquí tenéis la URL para obtener información del usuario de Isra https://api.github.com/users/gootyfer. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
Vamos a crear una página en la que haya un input de texto y un botón de buscar. El usuario escribirá en el input un nombre de usuario de GitHub. Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página:
-nombre
-número de repositorios
-avatar (imagen)
*/

//Constantes
const input = document.querySelector('.js-input');
const nameElement = document.querySelector('.js-name');
const avatarElement = document.querySelector('.js-avatar');
const reposElement = document.querySelector('.js-repos');
const btn = document.querySelector('.js-btn');

//Creamos un objeto en lugar de varias constantes que acabarán pintar en el elemento de HTML lo que retorne el servidor.
let userGitHub = {};

//Funciones:
function giveValueToUser() {
  input.value = 'ytaylor';
}
function paintHTML() {
  nameElement.innerHTML = userGitHub.name;
  avatarElement.src = userGitHub.src;
  reposElement.innerHTML = userGitHub.repo;
}
function getInfoApi() {
  const username = input.value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      userGitHub.name = data.login;
      userGitHub.src = data.avatar_url;
      userGitHub.repo = data.public_repos;
      paintHTML(userGitHub);
    });
}

//Llamadas a las funciones:
giveValueToUser();
getInfoApi();

//Funciones manejadoras:
function getGitHubUser(event) {
  event.preventDefault();
  getInfoApi();
}

// function getGitHubUser(event) {
//   event.preventDefault();
//   const input = document.querySelector('.js-input');
//   const username = input.value;

//   fetch(`https://api.github.com/users/${username}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       const nameElement = document.querySelector('.js-name');
//       nameElement.innerHTML = data.name;

//       const avatarElement = document.querySelector('.js-avatar');
//       avatarElement.src = data.avatar_url;
//       avatarElement.alt = 'Una imagen de usuario de GitHub';

//       const reposElement = document.querySelector('.js-repos');
//       reposElement.innerHTML = data.public_repos;
//     });
// }

btn.addEventListener('click', getGitHubUser);
