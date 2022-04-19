let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim().split("\n");
let max = Number(input[0]);
let output = '';
for(let i=1; i<=max; i++){
    let count = Number(input[i].split(" ")[0]);
    let word = input[i].split(" ")[1];
    for(let j=0; j<word.length; j++){
        for(let k=1; k<=count; k++){
            output += `${word[j]}`;
        }
    }
    output += "\n";
}
console.log(output);