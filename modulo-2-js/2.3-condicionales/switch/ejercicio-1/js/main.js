"use strict";

const ingredient = "tomates";

switch (ingredient) {
  case "pollo":
    console.log(`Ingrediente: ${ingredient} Receta: Filetes con patatas`);
    break;
  case "merluza":
    console.log(`Ingrediente: ${ingredient} Receta: Merluzita en salsa verde`);
    break;
  case "espinacas":
    console.log(`Ingrediente: ${ingredient} Receta: Espinacas rehogadas`);
    break;
  default:
    console.log("Nada en la nevera");
}
