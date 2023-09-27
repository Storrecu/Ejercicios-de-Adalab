'use strict';

const year = 2026;

switch (true) {
  case year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0):
    console.log(`El año ${year} es bisiesto`);
    break;
  default:
    console.log(`El año ${year} no es bisiesto`);
}
