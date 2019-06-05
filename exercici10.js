let array=[];
let array2=[];
for (let index = 1; index <= 10; index++) {
    array.push(index);  
}
console.log(array);
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
for (let index = 1; index <=10; index++) {
    array2[index-1]=index;   
}
console.log(array2);