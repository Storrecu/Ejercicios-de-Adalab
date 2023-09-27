'use strict';

/*
1. Generar número aleatorio
Crea una aplicación que me genere un número aleatorio entero utilizando el API 'rand.fun'.
Obtén el número aleatorio haciendo una petición a la siguiente URL https://api.rand.fun/number/integer
Añade parámetros a la URL del tipo clave=valor, siempre después de character ? y separados por &, por ejemplo si quisieras pedir un integer entre diferentes valores, la url quedaría así https://api.rand.fun/number/integer?min=0&max=10000
*/

function getInteger() {
  fetch('https://api.rand.fun/number/integer?min=0&max=100')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}
document.querySelector('.js-btn').addEventListener('click', getInteger);
