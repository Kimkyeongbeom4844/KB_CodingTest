let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim();
let max = Number(input);
let arr = [];
for (let i=1; i<=max; i++){
    arr.push(i);
    let $i = String(i).split('')
    let cha = ``;
//     for(let j=0; j<$i.length; j++){
//         cha += `${Number($i[j])}
// `
//     }
    $i.forEach((x)=>{
        if()
    })
    console.log(cha)
}


// let arr = [5,6,7,8,9];
// let arr2 = arr.map((x)=>{
//     return x+1;
// })
// console.log(arr2)

// let arr = [5,6,7,8,9];
// arr.forEach((x)=>{
//     return x+1;
// })
// console.log(arr);