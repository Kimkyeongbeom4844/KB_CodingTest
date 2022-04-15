let fs = require('fs');
let num = Number(fs.readFileSync('../sample.txt').toString());
let output = ``;
let star = ``;
for(let i=1; i<=num; i++){
    star += `*`;
    output += star + "\n"
}
console.log(output);