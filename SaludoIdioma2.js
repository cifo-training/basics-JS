
let idioma = "";
let mensaje = "";
let salir = "";
let intentos = 0;
let mcolor = ""

do {
    idioma = prompt("¿En que idioma quieres que te salude?: Castellano,Catalán,Inglés,Francés?");
    idioma = idioma.toLocaleLowerCase();
    seguir = true;

    // Quitamos acentos
    idioma = idioma.replace(new RegExp(/[àáâãäå]/g),"a");
    idioma = idioma.replace(new RegExp(/[èéêë]/g),"e");
    idioma = idioma.replace(new RegExp(/[ìíîï]/g),"i");             
    idioma = idioma.replace(new RegExp(/[òóôõö]/g),"o");
    idioma = idioma.replace(new RegExp(/[ùúûü]/g),"u");
    mcolor = "color:blue;"
    intentos++;
    
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
        default: {
            seguir = false;
            mensaje = "¿Qué idioma es ese?. Vuelve a intentarlo";
            mcolor = "color:rgba(255,0,0,0."+parseInt(intentos)+")";
        }
    }
    
    document.write('<h1 style='+mcolor+'>'+mensaje+'</h1>'); 

} while (!seguir);
