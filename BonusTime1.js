/*
Bonus Time!
Pedir al usuario un nuevo string y comprobar si es un Palindrome
Ejemplos de palíndromos:

- "A man, a plan, a canal, Panama!"
- "Amor, Roma"
- "race car"
- "Ana lleva al oso la avellana"
- "Senén té sis nens i set nenes"
- "Ésope reste ici et se repose"
- "I topi non avevano nipoti"
- "Sator Arepo tenet opera rotas".
*/

let cadena = "Esope reste ici et se repose"; //'Ana lleva al oso la avellana';

function cadenaPalindroma(cadena) {
    let cad = cadena;
    cad = cad.replace(/[ ,!]/gi,'');
    cad = cad.toUpperCase();
    let cadArray = cad.split(""); // Para convertir un String a un Array de caracteres!

    let cadRevArray = cadArray.slice(); // Para copiar un array completo, sin parámetros!
    cadRevArray.reverse(); // Invierte el array
    let mensaje = "";

    // Quitamos las comas que ha generado
    let fin1 = cadArray.toString();
    fin1 = fin1.replace(/[,]/gi,'');
    let fin2 = cadRevArray.toString();
    fin2 = fin2.replace(/[,]/gi,'');
    
    if (fin1 === fin2)
        mensaje = "Si que son cadenas Palindromas";
    else
        mensaje = "No son cadenas Palindromas";

    return mensaje;
}

console.log(cadena);
console.log(cadenaPalindroma(cadena));