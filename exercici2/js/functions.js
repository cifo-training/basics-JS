let nombre = prompt('¿ Cual es su nombre por favor?');
let apellidos = prompt(' ¿y su primer apellido?');
let juntos = nombre + " " + apellidos;
 console.log(nombre + " " + apellidos);

 function myFunction() {
  
    document.getElementById('pintar').innerHTML = "Hola" + " " + juntos;
    if(juntos === 'null' | juntos === 'null', 'null'){
        document.getElementById('pintar').innerHTML = "Hola desconocido!";
    }
 } 