let driver1='Node.js';
console.log(`El nombre del driver es ${driver1}`)
//let driver2=prompt('Introdueix el nom del navegador');
let driver2=navigator.appName+'';
console.log(`El nombre del navegador es ${driver2+' ('+navigator.appCodeName+')'}`)