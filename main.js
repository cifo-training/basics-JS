/* Crea una variable driver1 con el nombre del driver
Imprime "El nombre del driver es XXXX";
Crea una variable driver2 and ask the user para el navigator
Imprime "El nombre del navegador es YYYY"
 */

 let driver1 = 'John';
 let driver2 = 'Anna-Marie';
/* función que imprime el nombre del driver */
 function imprimirNombreDriver(driver){
    let mensaje = 'El nombre del driver es '+ driver;
    return mensaje;
 } 
/* función que imprime el nombre del navigator */
 function imprimirNombreNavigator(navigator){
    let mensaje = 'El nombre del navigator es '+ navigator;
    return mensaje;
 }

 console.log(imprimirNombreDriver(driver1));
 console.log(imprimirNombreNavigator(driver2));

/* función que compara cadenas */

function compararCadenas(cadena1, cadena2){

    let l1 = cadena1.length;
    let l2 = cadena2.length;

    let mensaje = 'Vaya!! las dos cadenas son iguales';

    if(l1>l2) {
    mensaje = `El driver, ${cadena1}, tiene el nombre más largo. Mide: ${l1}`;
    } else if(l1<l2){
    mensaje = `Yo, el navigator, ${cadena2}, tengo el nombre más largo. Mide: ${l2}`;
    }

    return mensaje;
    
}

console.log(compararCadenas(driver1,driver2));
/* 
function concatenar(palabra){
    let resultado='';

        for(i=0; i<palabra.length; i++){
            resultado += palabra.charAt(i).toUpperCase() + ' ';
        }

    return resultado;
} */
/* arrow function */
let concatenacion = (palabra) => {
    let resultado='';

    for(i=0; i<palabra.length; i++){
        resultado += palabra.charAt(i).toUpperCase() + ' ';
    }

return resultado;
} 

console.log(concatenacion(driver1));

/* ejercicio 9.7 Orden inverso*/

let reverso = (cadena) => {
    let reversoCadena='';
    let longitudCadena=cadena.length;

        for(let i=0; i<longitudCadena;i++){
            reversoCadena = reversoCadena + cadena[longitudCadena-(i+1)];
        }

    return reversoCadena;
}

console.log(reverso('Raul'));

let comparacion = (cadena1, cadena2) =>{
    return cadena1.localeCompare(cadena2);
}

let cadena1Primero = "El nombre del driver va primero";
let cadena2Primero = "Yo, el navigator voy primero";
let cadena3 = "Increíble! Ambos tenemos el mismo nombre?"
driver2='John';
console.log((comparacion(driver1,driver2)===-1)?cadena1Primero : cadena2Primero);

//console.log((comparacion(driver1,driver2)<0)?cadena1Primero : (driver2==0)?cadena3:cadena2Primero);

/* Detector de Palíndromos */
frase = 'Palindromo';
let deteccion = (frase)=>{
    let reg = /[\W_]/g;
    let smallString = frase.toLowerCase().replace(reg,'');
    let reverseString = smallString.split('').reverse().join('');

    if(reverseString== smallString) return true;

    return false;
}

console.log(deteccion(frase));