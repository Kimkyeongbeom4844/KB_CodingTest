let fs = require('fs');
let input = fs.readFileSync('../sample.txt','utf-8').toString().trim().split("\n");
let output = '';
for (i=0; i<input.length; i++){
    output += Number(input[i].split(" ")[0])+Number(input[i].split(" ")[1])+"\n";
}
console.log(output)