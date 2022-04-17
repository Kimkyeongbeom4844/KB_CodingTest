let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim().split("\n");
let count = Number(input[0]);
let arr = [];
let output = 0;
for(let i=0; i<count; i++){
    arr.push(input[1].split(" ")[i])
}
let max = Math.max(...arr);
for(let i=0; i<arr.length; i++){
    output += Number(arr[i])/max*100;
}
console.log(output/arr.length);