/*
Exercici 8: Condicionales
Dependiendo de quién tenga el nombre más largo is longer, imprime:
The Driver tiene el nombre más largo, tiene XX caracteres o
Yo, navegador tengo el nombre más largo, tiene XX caracteres o
Vaya, ambos nombres son iguales, XX caracteres!!
*/

let driver1 = '';
let driver2 = '';

function compararLongitudNombres(driver,navigator) {

    let p1 = driver.length;
    let p2 = navigator.length;
    let mensaje = "";

    if (p1==p2) 
        mensaje = `Vaya, ambos nombres son iguales, ${p1} caracteres!!`;
    else if (p1>p2)
            mensaje = `The Driver tiene el nombre más largo, tiene ${p1} caracteres`;
         else
            mensaje = `Yo, navegador tengo el nombre más largo, tiene  ${p2} caracteres`;
    return mensaje;
}

console.log(compararLongitudNombres(driver1,driver2));
