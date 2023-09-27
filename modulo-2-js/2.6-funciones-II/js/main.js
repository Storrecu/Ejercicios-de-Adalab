'use strict';

function tamaño(borderBox, width, padding, borderSize) {
  if (borderBox) {
    // Si es border-box, el ancho total incluye el contenido, el padding y el borde.
    const anchoTotal = width + 'píxeles';
    const anchoContenido = width - padding * 2 - borderSize * 2 + 'píxeles';
    return `El ancho del contenido es: ${anchoContenido} y el ancho total de la caja es ${anchoTotal}`;
  } else {
    // Si no es border-box (content-box), el ancho total es igual al ancho del contenido.
    return `El ancho del contenido es: ${
      width - padding * 2
    } píxeles y el ancho total de la caja es: ${width} píxeles`;
  }
}

const esBorderBox = true;
const anchoCaja = 50;
const paddingCaja = 5;
const borderSizeCaja = 3;

const result = tamaño(esBorderBox, anchoCaja, paddingCaja, borderSizeCaja);
console.log(result);

// Esta función primero verifica si es border-box. Si es true, calcula el ancho total restando el padding y el borde del ancho especificado y luego muestra ambos anchos en una cadena. Si es false, simplemente resta el padding del ancho especificado para obtener el ancho del contenido y muestra ambos anchos en la cadena.
