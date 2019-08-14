
let saludo = "Hola";
let nombre = "Carlos";
// saludar1(nombre,saludo);
saludar2(nombre,saludo);
saludar2(saludo,nombre);

function saludar(nombre) {
    console.log(`Hola ${nombre}!`);
    return `Hola ${nombre}!`;
}

function saludar1(nombre,saludo) {
    return console.log(`${saludo} ${nombre}!`);
}

function saludar2() {
    return console.log(`${arguments[0]} ${arguments[1]}!`);
}