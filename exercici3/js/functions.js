let texto = prompt('Introduce letras de la A a la Z');


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

 function azar(){
// recorrido palabras pa generar el random
for (i=0; i < palabrasLength; i++){
    document.getElementById('pintar').innerHTML = azar();
    console.log(azar);
}

} 
   function myFunction() {
    let randomPalabra = palabras.substring(azarPalabra, azarPalabra+1);
    document.getElementById('pintar2').innerHTML = ( 'La letra introducida,'+" "+ randomPalabra.toUpperCase() + " " + 'aparece en el texto generado al azar');
    document.getElementById('pintar1').innerHTML = randomPalabra.toUpperCase();

}
/* Finalmente he tenido que buscar el random en el prompt. pequeño descanso y quiero hacerlo con un random */
 