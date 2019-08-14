/*
Exercici 9: Bucles
Imprime todos los caracteres del nombre del driver, separado por un espacio y en mayúsculas ej.: "R A U L"
Imprime el nombre del navigator en order inverso. ej.: "luaR"
Dependiendo del orden alfabético lexicographic order de las cadenas, imprime:
El nombre del driver va primero
Yo, el navigator voy primero
Increíble! Ambos tenemos el mismo nombre?
*/

let driver1 = 'Margarita';
let driver2 = 'Franky';

function imprimeCadenaconEspacioBlanco(nombre) {
    let longitud = nombre.length;
    let salida = '';

    for (let i=0; i<longitud; i++) {
        salida += `${nombre[i]} `;
    }
    return salida.trim().toUpperCase();
}

function imprimecadenaOrdenInverso(nombre) {
    let longitud = nombre.length;
    let salida = '';

    for (let i=longitud-1; i>=0; i--) {
        salida += `${nombre[i]} `;
    }
    return salida.trim();
}

function compararOrdenLexico(driver,navigator) {
    let mensaje = "";

    if (driver === navigator) 
        mensaje = `Increíble! Ambos tenemos el mismo nombre?`;
    else if (driver > navigator)
            mensaje = `El nombre del driver va primero`;
         else
            mensaje = `Yo, el navigator voy primero`;
    return mensaje;
}

console.log(imprimeCadenaconEspacioBlanco(driver1));
console.log(imprimecadenaOrdenInverso(driver2));
console.log(compararOrdenLexico(driver1,driver2));
