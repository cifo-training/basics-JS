let numero = "";
let intentos = 0;
let sufijo = "";
let adivina = Math.floor(Math.random() * 100)-1;
let d = "";

do {
    numero = prompt("Introduce un número entre 1 y 100");
    numero = parseInt(numero);

    if (numero > adivina) {
        alert("El número a adivinar es menor"); //alert("El número a adivinar es menor")
        sufijo = "> X";
    } else if (numero < adivina) {
              alert("El numero a adivinar es mayor"); // alert("El numero a adivinar es mayor")
              sufijo = "< X";
           } else {
           sufijo = "= " + numero;
           }

    intentos++;
    document.writeln(numero + sufijo+"<br />"); // document.writeln(numero + sufijo + "<br />")

} while (numero !== adivina);

alert("Estupendo lo has adivinado en " + intentos + " intentos"); // alert("Estupendo lo has adivinado en " + intentos + " intentos")
