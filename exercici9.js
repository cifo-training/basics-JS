let driver1='Node.js';
let driver11='';
driver1=driver1.toUpperCase();
for (let index = 0; index < driver1.length; index++) {
    driver11+=driver1[index]+' ';   
}
console.log(driver11);
let driver2=navigator.appName+'';
let driver21='';
for (let index = driver2.length-1; index >= 0; index--) {
    driver21 +=driver2[index];   
}
console.log(driver21);

driver2=driver2.toUpperCase();
let names = [driver1, driver2];
names.sort();
lexMsg='Increíble! Ambos tenemos el mismo nombre?';
if (names[0]!==driver2)
    lexMsg='El nombre del driver va primero';
else if (names[0]!==driver1)
    lexMsg='Yo, el navigator voy primero';    

console.log(lexMsg);