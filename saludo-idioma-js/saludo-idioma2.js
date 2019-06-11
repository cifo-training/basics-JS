let idioma=prompt("En que idioma quieres que te salude?(CATALAN,CASTELLANO,INGLES,FRANCES");
idioma=idioma.toUpperCase();/*PONE IDIOMA EN MAYUSCULAS*/
let saludo;//="Idioma no registrado";

switch (idioma){
    case 'CATALAN':
        saludo="Hola";
        break;
    case 'CASTELLANO':
        saludo="Hola";
        break;
    case 'FRANCES':
        saludo="Bonjour";
        break;
    case 'INGLES':
        saludo="Hello";
        break;
    default:
        saludo='No conozco tu idioma';

}
document.write(`<h1 style="color:red">${saludo}</h1>`);