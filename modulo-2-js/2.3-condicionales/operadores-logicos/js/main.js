"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "";
// avatar que eligió el usuario al registrarse
let userAvatar =
  "https://ramenparados.com/wp-content/uploads/2014/09/kitty5B15D.png";

const imgElement = document.querySelector(".user__avatar");

imgElement.src = DEFAULT_AVATAR || userAvatar;
