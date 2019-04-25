/* Programa para comprobar que una letra aleatoria
está incluida en nuestro nombre */

/* Introducir la cadena a comparar */
let cadena = prompt('Introduce una cadena');
let cadena = cadena.toUpperCase();

/* Generamos letra aleatoria */
let numRandom = Math.floor(Math.random()*90-65)+65;

let letterRandom = String.fromCharCode(numRandom);

/* Comprobar si la cadena contiene la letra */

alert(cadena.includes(letterRandom));



