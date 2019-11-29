

/*  function azar(){
// recorrido palabras pa generar el random
for (i=0; i < palabrasLength; i++){
    document.getElementById('pintar').innerHTML = azar();
    
}

}  */
   function myFunction() {
    let texto = prompt('Introduce una palabra de la A a la Z').toLowerCase();

    document.getElementById('pintar1').innerHTML = (`La letra inscrita es la ${texto}`);

   // Debo generar YO el random y no cogerlo del string escrito en prompt
   
   //declaración de DONDE coge el string para generar el random
   
   let palabras = "ABCÇDEFGHIJKLMNOPQRSTUVWXTZabcçdefghiklmnopqrstuvwxyz";
   // cuantos elementos quiero random
  // let palabrasLength = " ";
   // donde coloco el valor de ese random

   let azarPalabra = Math.floor(Math.random()* palabras.toLowerCase().length);
   
   let randomPalabra = palabras.toLowerCase().substring(azarPalabra, azarPalabra+1);
   document.getElementById('pintar2').innerHTML = (`La letra generada es la ${randomPalabra}`);
   //comparamos los dos valores
 
   let compara = texto.includes(randomPalabra);
    document.getElementById('pintar').innerHTML = compara;

}
/* Finalmente he tenido que buscar el random en el prompt. pequeño descanso y quiero hacerlo con un random */
 