/*
Exercici 5

Bartender. Crear un programa para que el usuario introduzca una bebida (leche, coca-cola, cerveza) y la edad. El programa devolverá:

    Si es mayor de 18 puede beber las tres bebidas: "OK toma tu bebida"
    Si es mayor de 14 y menor de 18 y pide coca-cola y leche: "Ok toma tu bebida" si pide cerveza: "Lo siento eres pequeño"
    Si es igual o menor de 14 sólo puede beber leche.
*/

let bebida = prompt("¿Qué desea tomar?: leche, coca-cola o cerveza?");
let edad = 0;
mensaje = "Aquí tiene su ";
mensajeNegativo = "Lo siento pero no puedo servirle ";

if (bebida === "leche" || bebida === "coca-cola" || bebida === "cerveza") {
    if (bebida != "leche")
        edad = parseInt(prompt("¿Me puede decir su edad?"));
        if ((bebida === "cerveza" && edad < 18) || (bebida === "coca-cola" && edad <=14))
            mensaje = mensajeNegativo; 
    }
else
    mensaje = mensajeNegativo;

alert(mensaje+bebida);
