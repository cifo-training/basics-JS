
/*Ejemplos Arrays*/
/*let animals=['pig','goats','sheep'];
animals.push('cows');
animals[4]='chicken';
console.log(animals);
*/
function generarArray(myArray){
    let myArray1=[];

    for (i=0;i<10;i++){
        myArray.push=i+1;
    }
    for (i=10;i<20;i++){
        myArray[i]=i+1;
    }
//Metodos array
    myArray.unshift(99);//añade un elemento en la primera posicion
    myArray.shift();//elimina el elemento de l aprimera posicion
    myArray.splice(0,10);//borra 10 primeros elementos empezando en la pos 0
    myArray.splice(0);//lo borra todo
    myArray.pop()//quito el del final
    myArray.indexOf();//devuelve el primer indice
    myArray.forEach(function(element){console.log(element);})

    console.log(myArray);

}