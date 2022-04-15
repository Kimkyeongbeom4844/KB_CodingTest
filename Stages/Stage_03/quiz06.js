let fs = require('fs');
let num = Number(fs.readFileSync('../sample.txt').toString());
let output = '';
for(let i=num; i>=1; i--){
    output += num+'\n';
    --num;
}
console.log(output);