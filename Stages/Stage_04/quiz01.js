let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().split('\n');
let count = Number(input[0]);
let compare = input[1].split(" ");
let max = Number(compare[0]);
let min = Number(compare[0]);
let arrays = [];
for(let i=0; i<count; i++){
    if(Number(compare[i])>max){
        max = Number(compare[i]);
    }
    else if(Number(compare[i])<min){
        min = Number(compare[i]);
    }
    // arrays[i] = Number(compare[i]);
    // max = Math.max(...arrays);
    // min = Math.min(...arrays);
}
console.log(`${min} ${max}`);
// const fs = require('fs');
// const input = fs.readFileSync('../sample.txt').toString().trim().split('\n');
// const arr = input[1].split(' ').map(x=>x);
// const maxValue = Math.max(...arr);
// const minValue = Math.min(...arr);
// console.log(`${minValue} ${maxValue}`) 