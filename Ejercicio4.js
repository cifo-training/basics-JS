/*
Exercici 4

Introducir un número mediante prompt() y devolver en un alert los años que quedan para la jubilación (Establecida en 67).
*/

let edadTexto = prompt("Introduce tu edad");
let edadJubilacion = 67;
let edadNum = parseInt(edadTexto);

if (isNaN(edadTexto)) {
    alert(edadTexto + " No es un número");
} else {
    if (edadNum > edadJubilacion) {
        alert("Ya estas Jubilado colega!");
    } else {
        // alert("Te faltan " + (67 - edadNum) + " años");
        alert(`Te faltan  ${67 - edadNum}  años`);
    }
}