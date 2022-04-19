let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim().split("\n");
let max = Number(input[0]);
let output = 0;
for(let i=0; i<max; i++){
    output += Number(input[1][i])
}
console.log(output)