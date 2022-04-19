let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim().split(" ");
let arr = [];
for(let i=0; i<input.length; i++){
    let num = ``;
    for(let j=input[i].length-1; j>=0; j--){
        num += `${input[i][j]}`;
    }
    arr.push(num)
}
console.log(Math.max(...arr))