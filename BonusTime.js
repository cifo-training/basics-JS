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

let cadena = ''; //'Ana lleva al oso la avellana';

function cadenaPalindroma(cad) {
    cad = cad.replace(/[ ,!]/gi,'');
    cad = cad.toUpperCase();
    
    console.log(cad);

    let x = 0;
    let longitud = cad.length;
    let mensaje = "Si que son cadenas Palindromas";

    while (x<longitud) {
        if (cad[x] !== cad[longitud-x-1]) {
            mensaje = "No son cadenas Palindromas";
            break;
        }
        x++;
    }
    return mensaje;
}

console.log(cadena);
console.log(cadenaPalindroma(cadena));