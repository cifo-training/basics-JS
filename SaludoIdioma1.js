let idioma = prompt("¿En que idioma quieres que te salude?: Castellano,Catalán,Inglés,Francés?");
idioma = idioma.toLocaleLowerCase();
let mensaje = "";
// Quitamos acentos
idioma = idioma.replace(new RegExp(/[àáâãäå]/g),"a");
idioma = idioma.replace(new RegExp(/[èéêë]/g),"e");
idioma = idioma.replace(new RegExp(/[ìíîï]/g),"i");             
idioma = idioma.replace(new RegExp(/[òóôõö]/g),"o");
idioma = idioma.replace(new RegExp(/[ùúûü]/g),"u");

switch (idioma) {
    case "castellano":
    mensaje = "¡Buenos dias!";
        break;
    case "catalan":
        mensaje = "¡Bon dia!";
        break;
    case "ingles":
        mensaje = "¡Good morning!";
        break;
    case "frances":
        mensaje = "¡Bonjour!";
        break;
    default:
        mensaje = "¿Qué idioma es ese?";
}

document.write(`<h1 style="color:red;">${mensaje}</h1>`);
