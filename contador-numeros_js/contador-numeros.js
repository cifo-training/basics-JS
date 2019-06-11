//let contador;
for(let i=1;i<=30;i++)
{
    if (i===10) document.write(`diez-par`);
    else if (i===20) document.write(`veinte-par`);
    else {
        if (i%2===0) document.write(`<p>${i}-par</p>`);
        else  document.write(`<p>${i}-impar</p>`);
    }
}