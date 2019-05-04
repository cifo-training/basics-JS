let idioma = prompt("¿En que idioma quieres que te salude?: Castellano,Catalán,Inglés,Francés?");
idioma = idioma.toLocaleLowerCase();
let mensaje = "";
// Quitamos acentos
idioma = idioma.replace(new RegExp(/[àáâãäå]/g),"a");
idioma = idioma.replace(new RegExp(/[èéêë]/g),"e");
idioma = idioma.replace(new RegExp(/[ìíîï]/g),"i");             
idioma = idioma.replace(new RegExp(/[òóôõö]/g),"o");
idioma = idioma.replace(new RegExp(/[ùúûü]/g),"u");


if (idioma==="castellano")
    mensaje = "¡Buenos dias!";
else if (idioma==="catalan")
        mensaje = "¡Bon dia!";
    else if (idioma==="ingles")
            mensaje = "¡Good morning!";
        else if (idioma==="frances")
                mensaje = "¡Bonjour!";
            else
                mensaje = "¿Qué idioma es ese?";

alert(mensaje);
