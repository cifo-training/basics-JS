var palindrom1 = prompt('Introdueix el mot o expresio a evaluar:');

function palindrome(cadena) {
    //reemplacem tots els espais, comes i admiracions de la frase a analitzar
    cadena = cadena.replace(/ |,|!/g, '').toUpperCase();
    //definim variables per defecte
    let cadena2 = '';
    let msg = 'No es palindrom';
    //invertim els caracters de la cadena principal
    for (let index = cadena.length - 1; index >= 0; index--) {
        cadena2 += cadena[index];
    }
    //comparem cadenes
    if (cadena === cadena2)
        msg = 'Eureka! es palíndrom';
    return msg;
}
function palindrome2(cadena) {
    cadena = cadena.replace(/[ ,!]/g, '').toUpperCase();
    //divideix un string en caracters i ho guaradem com array
    let cadena1 = cadena.split('');
    //fem una copia del array
    let cadena2 =cadena1.slice();
    //definim misatge per defecte
    let msg = 'No es palindrom';
    //invertim la cadena de caracters
    cadena2.reverse();
    //comparo cadenes passant-les a string i comparant strings
    if ((cadena1.toString()) === (cadena2.toString()))
        msg = 'Eureka! es palíndrom';       
    return msg;
}

alert(palindrome(palindrom1));
alert(palindrome2(palindrom1));