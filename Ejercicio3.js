/*
Exercici 3

Letter Quizz. Escriu un programa que demani una cadena de texte i que la compari amb un caràcter generat aleatòriament. Si la cadena contè el caràcter retorna un missatge amb true sinò retorna false.

Utilitza els mètodes prompt() i alert per demanar i mostrar els missatges.
*/
let texto = prompt("Introduce una cadena de texto:");
texto = texto.toUpperCase();

let nascii = Math.floor(Math.random() * 'Z'.charCodeAt() - 'A'.charCodeAt()) + 'A'.charCodeAt(); // 65 - 90 (A-Z)
// let nascii = Math.floor(Math.random() * 26)+65; // 65 - 90 (A-Z)
let caracter = String.fromCharCode(nascii);

document.writeln(`El carácter a encontrar es ${caracter}`);

if (texto.includes(caracter)) 
    alert("Tu nombre " + texto + " tiene el caracter " + caracter);
else 
    alert("Tu nombre " + texto + " no tiene el caracter " + caracter);
