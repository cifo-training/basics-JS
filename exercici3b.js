/* Solicitem cadena*/
let cadena=prompt('Introudeix cadena');
let cadena=cadena.toUpperCase();
/* Generem lletra aleatoria */
let numRandom=Math.floor(Math.random()*'Z'.charCodeAt()-'A'.charCodeAt());
let letterRandom= String.fromCharCode(numRandom);
/* Comprovar si la cadena conte la lletra */ 
alert(cadena.includes(letterRandom));