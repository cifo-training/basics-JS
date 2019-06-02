/*pares primero
  impares despues*/
let par='PAR \n';/*let par='PAR <br>'*/ 
let impar='IMPAR \n';/*let impar='IMPAR <br>'*/

for(i=1;i<=30;i++){
    if(i%2===0){
        par +=i+'\n'}
    else impar +=i+'\n';
    
}

console.log(par);/*document.write() */
console.log(impar);/*documen.write() */

/*  no va
document.write('<h1>Pares</h1>');
for(let i1=2;i1<=30;i1+2)    document.write(`<p>${i1}<p>`);
document.write('<h1>imPares</h1>');
for(let i2=1;i2<30;i2+3)    document.write(`<p>${i2}<p>`);
*/