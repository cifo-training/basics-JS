/*
-Imprime todos los caracteres del nombre del driver, separado por un espacio y en mayúsculas ej.: "R A U L"
-Imprime el nombre del navigator en order inverso. ej.: "luaR"
-Dependiendo del orden alfabético lexicographic order de las cadenas, imprime:
    El nombre del driver va primero
    Yo, el navigator voy primero
    Increíble! Ambos tenemos el mismo nombre?
*/
driver='victor';
navigator='miguel';
/*Imprime caracteres en mayusculas y separados por blancos*/
function imprimeCaracteresDriver(driver1){
    let driverEspacios='';
    let driverImpreso=driver1.toUpperCase();//poner a mayusculas;
    //console.log(driverImpreso);
    for(let i=0;i<driver1.length;i++){
        driverEspacios=driverEspacios+driverImpreso[i]+' ';//.toUpperCase()+' ';
    }
    driverImpreso=driverEspacios;
    return(driverImpreso);
}
/*Imprime el reverso de un texto*/
function imprimeReversoNavigator(navigator1){
    let reversoNavigator='';/*=navigator1.reverse();*/
    let longNavigator=navigator1.length;

    for(let i=0;i<longNavigator;i++){
        reversoNavigator=reversoNavigator+navigator[longNavigator-(i+1)];
    }
    return(reversoNavigator);
}
/*Imprime el orden lexicografico de 2 cadenas*/
function ordenLexicografico(cadena1,cadena2){
    let longCadena1=cadena1.length;
    let longCadena2=cadena2.length;

    
}

/*PP*/
console.log(imprimeCaracteresDriver(driver));
console.log(imprimeReversoNavigator(navigator));
//console.log(ordenLexicografico(driver,navigator));