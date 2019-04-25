/* introuir la cadena a comparar*/
var n1 = prompt("Introdueix cadena de text");
/* inicializem valor numeric random */
var rnd1 = 0;
/* executem random fins obtenir un valor contingut en els rangs de lletres majuscules (65-90) i minuscules (97-122) */
while (rnd1 === 0) {
    let rnd = Math.floor((Math.random() * 123));
    if (rnd < 65 || rnd > 90) {
        if (rnd < 97 || rnd > 122) {
        } else {
            rnd1 = rnd;
        }
    } else {
        rnd1 = rnd;
    }
}
/* convertim el valor numeric a l'equivalent en caracter en codi ascii*/
var res=String.fromCharCode(rnd1);
if (res>0){
    console.log("true");  
}else console.log("false");

/*
abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ
*/