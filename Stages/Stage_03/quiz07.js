let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().split('\n');
let max = Number(input[0]);
let output = '';
for(let i=1; i<=max; i++){
    output += `Case #${i}: ${Number(input[i].split(' ')[0])+Number(input[i].split(' ')[1])}
`;
}
console.log(output);