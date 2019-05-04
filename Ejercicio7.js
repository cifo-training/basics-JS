/*
Exercici 7: Nombres y entrada de datos
Crea una variable driver1 con el nombre del driver
Imprime "El nombre del driver es XXXX";
Crea una variable driver2 and ask the user para el navigator
Imprime "El nombre del navegador es YYYY"
*/

let driver1 = 'Jhon';
let driver2 = 'Anna';

/* función que obtiene el mensaje para imprimir el nombre del Driver */
function imprimirNombreDriver(driver) {
    let mensaje = `El nombre del driver es ${driver}`;
    return mensaje;
}
/* función que obtiene el mensaje para imprimir el nombre del Navigator */
function imprimirNombreNavigator(navigator) {
    let mensaje = `El nombre del navegador es ${navigator}`;
    return mensaje;
}

console.log(imprimirNombreDriver(driver1));
console.log(imprimirNombreNavigator(driver2));