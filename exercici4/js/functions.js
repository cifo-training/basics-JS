
let edad = prompt("How old are you?");
let edadJubilacion = 67;
let jubiladoYa = (edadJubilacion - edad);
console.log(edad);

function jubilado(){
    if(edad < edadJubilacion){
        alert("You need still" +" "+ jubiladoYa +" " +" to become a goverment employ!")
    }else{
        alert("You are rather lucky,"+" "+ -jubiladoYa +" "+ "years enjoying your well earned peace of mind.")
    }
}
document.getElementById('boton1').onClick = function(){
    myFunction();
}

function myFunction() { 
     document.getElementById('pintar').innerHTML = jubilado();
  } 
  //por qué undefined?
  //



