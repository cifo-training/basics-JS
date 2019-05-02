let lengthMsg=`Vaya, ambos nombres son iguales, ${driver1.length} caracteres!!`;
if (driver1.length>driver2.length){
    lengthMsg=`The Driver tiene el nombre más largo, tiene ${driver1.length} caracteres (${driver1.length-driver2.length} caracteres mas de el navegador)`;
}else if (driver1.length<driver2.length){
    lengthMsg=`Yo, navegador tengo el nombre más largo, tengo ${driver2.length} caracteres (${driver2.length-driver1.length} caracteres mas de el Driver)`;
}