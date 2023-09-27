'use strict';

function variasOp(val1, val2) {
  const result = val1 * val2;
  return result;
}
const resultado = variasOp(10, 5);
console.log(resultado);

function mediaOp(val1, val2, val3, val4) {
  const op = (val1 + val2 + val3 + val4) / 4;
  return op;
}

const result = mediaOp(1, 2, 3, 4);
console.log(result);

function parOImpar(val1) {
  if (val1 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const resultados = parOImpar(5);
console.log(resultados);
