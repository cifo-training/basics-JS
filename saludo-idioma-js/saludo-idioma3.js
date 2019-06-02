
let idioma,saludo;
do{
    
    idioma=prompt("En que idioma quieres que te salude?(CATALAN,CASTELLANO,INGLES,FRANCES");
    idioma=idioma.toUpperCase();/*PONE IDIOMA EN MAYUSCULAS*/
    if (idioma!=='CATALAN'&&idioma!=='CASTELLANO'&&idioma!=='FRANCES'&&idioma!=='INGLES') alert('Idioma desconocido');
}
    while (idioma!=='CATALAN'&&idioma!=='CASTELLANO'&&idioma!=='FRANCES'&&idioma!=='INGLES');
//let saludo;//="Idioma no registrado";

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
    default:/*por aqui nunca pasa*/
        saludo='No conozco tu idioma';

}
document.write(`<h1 style="color:red">${saludo}</h1>`);