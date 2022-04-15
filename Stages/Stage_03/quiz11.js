let fs = require('fs');
let input = fs.readFileSync('../sample.txt','utf-8').toString().trim().split("\n");
let count = Number(input[0].split(" ")[0]);
let max = Number(input[0].split(" ")[1]);
let compare = input[1].split(" ");
let output = '';
for(let i=0; i<count; i++){
    if(Number(compare[i])<max){
        output += `${Number(compare[i])} `;
    }
}
console.log(output.trim());