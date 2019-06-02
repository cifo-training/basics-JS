/*>=18->BEER,
>14&&<18->COKE,
<14->MILK*/
edad=parseInt(prompt('Cual es tu edad:'));
bebida=prompt('Que quieres tomar(BEER,COKE,MILK)?');
if (edad>=18){alert('ok');}
else if ((edad>14)||(edad<18)){
        if (bebida==='BEER'){alert('No puedes tomar BEER');
        else {alert('ok');   }
    }
    else {
    if (bebida!='MILK'){console.log('Solo puedes tomar MILK');}
    }
}