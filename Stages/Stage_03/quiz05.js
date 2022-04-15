let fs = require(`fs`);
let num = Number(fs.readFileSync(`../sample.txt`).toString())
let output = '';
for(let i=1; i<=num; i++){
    output += i+ '\n';
}
console.log(output);