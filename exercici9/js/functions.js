// Solución visualizada en 
// https://www.freecodecamp.org
// utilizaremos la iteración for () para que se trabaje mejor en strings largos

// constante regex para limpiar el string

let phrase = prompt(`Escribe un palíndrome!`);

const myFunction = ()=> {
    

    let clearString = phrase.match(/[^A-Za-z0-9]/g); 
// esta es la misma let clearString = /\W_]/g;
//llevamos al str a minusculas y quitamos los espacios vacios
    let str = phrase.toLowerCase().replace(clearString, '');
//medimos cuan largo es el string
    let lengthString = str.length;
    
    //loop for
    for(let i = 0; i < lengthString/2; i++){
    //iterción continua hasta que NO sean iguales las comparaciones
    if(str[i] !== str[lengthString -1 -i]){
        
        return (document.getElementById('pintar').innerHTML = (`${phrase} is not a palindrome`));
    }
}
    //else devuelve verdadero
    
    
    return (document.getElementById('pintar').innerHTML = (`${phrase} it is a palindrome`)); 
};





