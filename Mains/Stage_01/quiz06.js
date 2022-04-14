let fs = require(`fs`);
let input = fs.readFileSync(`../예제.txt`).toString().split(" ");
let result = input[0] - input[1];
console.log(result);