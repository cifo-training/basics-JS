
let edad = prompt("How old are you?");
let edadJubilacion = 67;
let jubiladoYa = (edadJubilacion - edad);
console.log(edad);


/* function jubilado(){
    if(edad < edadJubilacion){
        return ("You need still" +" "+ jubiladoYa +" " +" to become a goverment employ!")
    }else{
        return ("You are rather lucky,"+" "+ -jubiladoYa +" "+ "years enjoying your well earned peace of mind.")
    }
};

function myFunction() { 
    document.getElementById('pintar').innerHTML = jubilado();
 } ;
 document.getElementById('boton1').onClick = function(){
    myFunction();
}; */
 const myFunction = () =>{
     edad < edadJubilacion ?
     document.getElementById('pintar').innerHTML = (`You need still ${jubiladoYa}  to become a goverment employ!`):
     document.getElementById('pintar').innerHTML = (`You are rather lucky ${-jubiladoYa} years enjoying your well earned peace of mind.`);
 }



