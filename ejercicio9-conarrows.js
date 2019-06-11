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

/*xcon arrows funtions-->mirar las soluciones*/
/*9.6 con funciones anonimas:arrow function.acabarlo*/
let concatenacion=(palabra)=>{
    let resultado='';
    for(i=0;i<palabralength;i++){
        resultado=+=palabra.charAt(i).toUpperCase();
    }
};
/*9.7*/

/*9.8*/
let comparacion=(cadena1,cadena2)=>{
    return(cadena1.localeCompare(cadena2);)
    
}
let cadena1Primero="El nombre del driver va primero";
let cadena2Primero="Yo, el navigator voy primero";
let cadena3="Increible! Ambos tenemos el mismo nombre?"
driver2='John';
//Increible! Ambos tenemos el mismo nombre?""
console.log((comparacion(driver1,driver2)===-1)?cadena1Primero:cadena2Primero);
//console.log((comparacion(driver1,driver2)<0)?cadena1Primero:(driver2==0)?cadena3:cadena2Primero;//no va

/*palindromo.acabarlo*/
let deteccion=(frase)=>{
    let reg=/[\W_]/g;//cualquier caracter dirtinto de una letra,no ignora mayusculas
    let smallString=frase.toLowerCase().replace(reg.'');
    let reverseString==smallString) return true;

    //if reverseString==smallString //acabarlo
}
/*PP*/
console.log(imprimeCaracteresDriver(driver));
console.log(imprimeReversoNavigator(navigator));
//console.log(ordenLexicografico(driver,navigator));

/*pp.de las arrow functions*/
