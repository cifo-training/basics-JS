

let x = prompt('Write your name dear friend.');


function myFunction() {
    
    if(x == ('')){
        document.getElementById('pintar').innerHTML = ('No name, no gain!');
     }else{
         
      document.getElementById('pintar').innerHTML = (x.toUpperCase() + " " +" press F12");
     
     } 
  
}
console.log(x.toUpperCase() + " "+ " is a great name!");


