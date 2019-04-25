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
if (res>0){
    console.log("true");  
}else console.log("false");

/*
abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ
*/