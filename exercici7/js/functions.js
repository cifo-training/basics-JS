

let x = prompt('Write a name for the Driver.');
let nameDriver = 'Mister D';
/* function myFunction() {
    let namePrompt = ()=>{
    if(x == ('')){
        document.getElementById('pintar').innerHTML = ('No name, no gain!');
     }else{
         
      document.getElementById('pintar').innerHTML = (x.toUpperCase() + " " +" is your driving name"+ ('<br/>') + `${nameDriver} is the browser's name`);
      
     
     } 
    }
     return namePrompt();
  
};
console.log(x.toUpperCase() + " "+ " is a great name!"); */

const myFunction = () =>{
    (x == (''))?
    document.getElementById('pintar').innerHTML = ('No name, no gain!'):
    document.getElementById('pintar').innerHTML = (x.toUpperCase() + " " +" is your driving name"+ ('<br/>') + `${nameDriver} is the browser's name`);
};


