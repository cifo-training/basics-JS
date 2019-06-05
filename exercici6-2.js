for (let index = 1; index <= 30; index+=2) {
    let msg;
    let parImpar='impar';
    switch (index) {
        case 10:
            msg="diez";
            break;
            case 20:
            msg="veinte";
            break;
    
        default:
            msg=index;
            break;
    }
    if(index % 2 == 0) { parImpar= "par"; }
    console.log(msg+"-"+parImpar);   
}
let parells='Parells\n',imparells='Imparells\n';
for (let index = 1; index <= 30; index++){
    if(index % 2 == 0)
    parells+=index+'\n';
    else imparells+=index+'\n';
}
console.log(parells+imparells);