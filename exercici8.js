let nom1='Carlos';
let nom2='Dani';
function compareNom(nom1,nom2){
    let l1=nom1.length;
    let l2=nom2.length;
    let msg='Vaya, ambos nombres son iguales';
    if (l1>l2){
        msg=`The Driver ${nom1} tiene el nombre más largo con ${l1} caracteres`;
    }else if (l1<l2){
        msg=`Yo, navegador ${nom2} tengo el nombre más largo con ${l2} caracteres`;
    }
    return msg;
}

console.log(compareNom(nom1,nom2));
