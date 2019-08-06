let texto = prompt('Introduce (broma geak) un "string", para el resto de los ciudadanos cuerdos, una cadena de texto, por favor');


 console.log(texto);


// Debo generar YO el random y no cogerlo del string escrito en prompt

//declaración de DONDE coge el string para generar el random

let palabras = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
// cuantos elementos quiero random
let palabrasLength = " ";
// donde coloco el valor de ese random


let azarPalabra = Math.floor(Math.random()* palabras.length);

let randomPalabra = palabras.substring(azarPalabra, azarPalabra+1);
//comparamos los dos valores

let compara = texto.includes(randomPalabra);

alert ( 'La siguiente palabra,'+" "+ compara + " " + 'aparece en el texto introducido');

/*  function azar(){
// recorrido palabras pa generar el random
for (i=0; i < palabrasLength; i++){
    document.getElementById('pintar').innerHTML = azar();
    
}

}  */
   function myFunction() {
  
    document.getElementById('pintar').innerHTML = compara;

}
/* Finalmente he tenido que buscar el random en el prompt. pequeño descanso y quiero hacerlo con un random */
 