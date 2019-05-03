let driver1='Angelina';
let driver2='Brad';

//retorna el missatge del nom del driver
function imprimirNomDriver(driver){
    let msg=`El nom del driver es ${driver}`;
    return msg;
}
//retorna el missatge del nombre del navegador
function imprimirNomNavigator(navigator){
    let msg=`El nom del navegador es ${navigator}`;
    return msg;
}
console.log(imprimirNomDriver(driver1));
console.log(imprimirNomNavigator(driver2));