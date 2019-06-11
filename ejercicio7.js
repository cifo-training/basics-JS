/*Exercici 7: Nombres y entrada de datos
Crea una variable driver1 con el nombre del driver
Imprime "El nombre del driver es XXXX";
Crea una variable driver2 and ask the user para el navigator
Imprime "El nombre del navegador es YYYY"
*/
let driver1='John';//driver
let driver2='Anna';//navegador
/*funcion que imprime el nombre del driver*/
function imprimirNombreDriver (driver)
{   let mensaje=`El nombre del driver es ${driver}`;
    /*let mensaje='El nombre del driver es'+ driver;*/
    return mensaje;

}
/*funcion que imprime el nombre del driver*/
function imprimirNombreNavigator(navigator)
{
    let mensaje=`El nombre del navigator es ${navigator}`;
    /*let mensaje='El nombre del navigator es'+ navigator;*/
    return mensaje;
}

console.log(imprimirNombreDriver(driver1));
console.log(imprimirNombreNavigator(driver2));