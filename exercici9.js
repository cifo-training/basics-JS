let driver1 = 'Carlos';
let driver2 = 'Dani';

function nombrarSeparadoEspacio(nom) {
    let nouNom = '';
    nom = nom.toUpperCase();
    for (let index = 0; index < nom.length; index++) {
        nouNom += nom[index] + ' ';
    }
    return nouNom;
}
console.log(nombrarSeparadoEspacio(driver1));
function invertirNom(nom) {
    let nouNom = '';
    for (let index = nom.length - 1; index >= 0; index--) {
        nouNom += nom[index];
    }
    return nouNom;
}
console.log(invertirNom(driver2));

function longitudNombre(nom1, nom2) {
    nom1=nom1.toUpperCase();
    nom2=nom2.toUpperCase();
    let names = [nom1, nom2];
    names.sort();
    lexMsg = 'Increíble! Ambos tenemos el mismo nombre?';
    if (names[0] === nom1)
        lexMsg = `El nombre del driver ${nom1} va primero`;
    else if (names[0] === nom2)
        lexMsg = `Yo, el navigator ${nom2} voy primero`;
    return lexMsg;
}
console.log(longitudNombre(driver1, driver2));
