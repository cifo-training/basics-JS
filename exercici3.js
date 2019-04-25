var n1 = prompt("Introdueix cadena de text");
var rnd1 = 0;
while (rnd1 == 0) {
    let rnd = Math.floor((Math.random() * 122) + 1);
    if (rnd < 65 || rnd > 90) {
        if (rnd < 97 || rnd > 122) {
        } else {
            rnd1 = rnd;
        }
    } else {
        rnd1 = rnd;
    }
}
var res=String.fromCharCode(rnd1);
console.log(res);
console.log("Hi han "+(n1.indexOf(res)+1)+" '"+res+"' en el text introduit");

/*
abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ
*/