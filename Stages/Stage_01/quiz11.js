let fs = require(`fs`);
let input = fs.readFileSync(`../예제.txt`).toString().split(" ");
let num = Number(input);
let result = num - 543;
console.log(result);