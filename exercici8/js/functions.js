

let x = prompt('Write a name for the Driver.');
let nameDriver = 'Mister D';
/* let larger =  x.length > nameDriver.length;
let shorter =  x.length < nameDriver.length;
let same =  x.length == nameDriver.length; */
// aprender a utilizarlos como parametros

const myFunction = ()=> {
    larger = x.length > nameDriver.length?
    document.getElementById('pintar').innerHTML = (`You ${x} got a larger name, it has ${x.length} characters`):
    document.getElementById('pintar').innerHTML = (`I, ${nameDriver} got the larger name, I've got ${nameDriver.length} characters`);
    same = x.length == nameDriver.length?
    document.getElementById('pintar').innerHTML = (`You ${x} and I ${nameDriver} gort the same number of characters`):
     false;
    none = x.length == ""?
    document.getElementById('pintar').innerHTML = (`No name, no game`):
     false;
};



/* const myFunction = ()=> {
    larger?
    document.getElementById('pintar').innerHTML = (`You ${x} got a larger name, it has ${x.length} characters`):
    document.getElementById('pintar').innerHTML = (`I, ${nameDriver} got the larger name, I've got ${nameDriver.length} characters`);
    same?
    document.getElementById('pintar').innerHTML = (`You ${x} and I ${nameDriver} gort the same number of characters`):
     false;
}; */