/*Exercici 8: Condicionales
Dependiendo de quién tenga el nombre más largo is longer, imprime:
The Driver tiene el nombre más largo, tiene XX caracteres o
Yo, navegador tengo el nombre más largo, tiene XX caracteres o
Vaya, ambos nombres son iguales, XX caracteres!!
*/

let driver='victor';
let navigator='miguelllllllll';
/*Compara 2 cadenas y nos dice cual es la mas larga*/
function nombreMasLargo(driver1,navigator1)
{   let longitud1;
    let longitud2;
    let mensaje;

    longitud1=driver1.length;
    longitud2=navigator1.length;

    if (longitud1>longitud2){
        //mensaje=`${driver1} tiene el nombre mas largo,tiene ${longitud1} caracteres`;
        mensaje=driver1+' tiene el nombre mas largo,tiene ' +longitud1+' caracteres'
                            }
    else if (longitud1<longitud2){
        //mensaje=`${navigator1} tengo el nombre mas largo,tiene ${longitud2} caracteres`;
        mensaje=navigator1+' tiene el nombre mas largo,tiene ' +longitud2+' caracteres';
                                 }
        else //mensaje=`Vaya,ambos nombres son iguales,${longitud1} caracteres`;
             mensaje='Vaya,ambos nombres son iguales,'+longitud1+' caracteres';
    return(mensaje);
    }

    console.log(nombreMasLargo(driver,navigator));