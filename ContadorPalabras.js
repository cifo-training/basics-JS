/* 
Contador de Palabras, no le importa si hay más de un espacio en blanco 
*/

let nombre = prompt("Como te llamas?");
nombre = nombre.trim();

document.writeln("Hola "+nombre.replace(/[ ]/gi,"_")+"<br />");
alert("Tienes "+nombre.length+" letras");
document.writeln("En mayusculas "+nombre.toUpperCase()+"<br />");


let nombrefinal = "";
let cntpalabras = 0;
let nposspace = -1;
let cadena = "";

while (nombre.length > 0) {
    nposspace = nombre.indexOf(" ");
    if (nposspace > -1) { 
        // Ha encontrado un espacio en blanco
        cadena = nombre.substring(0,nposspace).trim();
        cadena = cadena[0].toUpperCase()+cadena.substring(1);
        nombrefinal = nombrefinal + " " + cadena;
        nombre = nombre.substring(nposspace+1).trim();
    } else {
        cadena = nombre.trim();
        cadena = cadena[0].toUpperCase()+cadena.substring(1);
        nombrefinal = nombrefinal + " " + cadena;
        nombre = "";
    }
    cntpalabras++;
}

document.writeln(nombrefinal+" Tiene "+cntpalabras+" palabras<br />");


