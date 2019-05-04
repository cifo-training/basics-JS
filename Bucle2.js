
let txtPares = 'Pares <br />';
let txtImpares = 'Impares <br />';

for (let i=1 ; i<=30 ; i++) {
    if (i % 2 == 0)
        txtPares+=`${i}<br />`;
        //txtPares = txtPares + i.t+'<br />';
    else
        txtImpares+=`${i}<br />`;
        //txtImpares = txtImpares + i.toString()+'<br />';
}

document.writeln(`${txtPares}${txtImpares}`);

