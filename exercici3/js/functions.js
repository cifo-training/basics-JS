let texto = prompt('Introduce (broma geak) un "string", para el resto de los ciudadanos cuerdos, una cadena de texto, por favor');


 console.log(texto);

/* let azar = Math.random(String).toString(36); 
console.log(azar); */
// not quite lo que busco
// Debo generar YO el random y no cogerlo del string escrito en prompt

//declaración de DONDE coge el string para generar el random

let palabras = texto;
// cuantos elementos quiero random
let palabrasLength = " ";
// donde coloco el valor de ese random


let azarPalabra = Math.floor(Math.random()* palabras.length);

let randomPalabra = palabras.substring(azarPalabra, azarPalabra+1);
alert ( 'La siguiente palabra,'+" "+ randomPalabra.toUpperCase() + " " + 'aparece en el texto introducido');

 function azar(){
// recorrido palabras pa generar el random
for (i=0; i < palabrasLength; i++){
    document.getElementById('pintar').innerHTML = azar();
    
}

} 
   function myFunction() {
  
    document.getElementById('pintar').innerHTML = randomPalabra;

}
 