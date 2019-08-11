let bebidas = [
    'cerveza',
    'coca-cola',
    'leche'
];
let edad = prompt('How old are you?');

document.getElementById('boton1').onClick = function(){
    myFunction();
}
function myFunction() {
    
     
     document.getElementById('pintar').innerHTML = edad;
  } 
function addClassCheck(e){
    if(e.checked){
        e.classList.add("marked");
    }else{
        e.classList.remove("marked");
    }
    if(document.getElementsByClassName("marked").length > 1){
        alert("Marca sólo una opción por favor.");
        e.checked = false;
        e.classList.remove("marked");
    }
}
function dataCheckBox(){
    
}
function mayorEdad(){
   //necesito recoger la data del checkbox primero
}

