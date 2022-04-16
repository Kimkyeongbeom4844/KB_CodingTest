let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().split("\n");
let count = input.length;
let compare =[];
let max = 0;
let where = 0;
for(let i=0; i<count; i++){
    compare[i] = Number(input[i]);
    max = Math.max(...compare);
    if(max == compare[i]){
        where = i+1;
    }
}
console.log(`${max}
${where}`)