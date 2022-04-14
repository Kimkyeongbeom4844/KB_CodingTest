let fs = require(`fs`);
let input = fs.readFileSync(`../예제.txt`).toString();
process.stdout.write(`${input}`);
if(input == `joonas`){
    process.stdout.write(`??!`);
}