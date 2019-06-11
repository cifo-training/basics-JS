/*Programa para comprobar que una letra aleatoria esta 
incluida en nuestro nombre*/

/*Introducir la cadena a comparar*/
let cadena=prompt('Introduce una cadena');
cadena=cadena.toUpperCase();//pasar a mayusculas

/*Generamos letra aleatoria*/
//let numRandom=Math.floor(Math.random()*123-65)+65;//si no pasamos a mayusculas
let numRandom=Math.floor(Math.random()*(90-65)+65;
//let numRandom=Math.floor(Math.random()*('Z'.charCodeAt()-'A'.charCodeAt())+'A'.CharCodeAt();
let letterRandom=String.fromCharCode(numRandom);//pasa codigoACII a letra

/*Comprobar si la cadena contiene la letra*/
alert(cadena.includes(letterRandom));//Mira si la letra esta dentro
