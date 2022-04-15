let fs = require('fs');
let input = fs.readFileSync('../sample.txt','utf-8').toString().split("\n");
let output = '';
for(let i=0; i<input.length-1; i++){
        output += Number(input[i].split(" ")[0])+Number(input[i].split(" ")[1])+'\n';
}
console.log(output);