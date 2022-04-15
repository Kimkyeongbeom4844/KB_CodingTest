let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString()
let count = Number(input.split(`
`)[0]);
for(let i=1; i<=count; i++){
    console.log(Number(input.split(`
`)[i].split(" ")[0])+Number(input.split(`
`)[i].split(" ")[1]));
}