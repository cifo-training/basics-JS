//definim variables
let population=1000;
let years=0;
//iniciem bucle incrementant anys fins que la poblacio superi la fita marcada
while (population<=1200) {
    years++;
    population+=(population*0.02)+50;
}    
//mostrem en consola el resultat de la operacio
console.log(`En ${years} anys la poblacio superara els 1200 habitants per ${Math.trunc(population-1200)} persones` );
