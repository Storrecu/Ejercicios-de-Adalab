'use strict';

for (let i = 1; i < 11; i++) {
  console.log('Voy por la vuelta ' + i);
}

let acc = 0;

for (let i = 1; i < 11; i++) {
  acc = acc + 2;
  console.log(`El resultado es ${acc}`);
}
