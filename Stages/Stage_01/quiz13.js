let fs = require(`fs`);
let input = fs.readFileSync(`../예제.txt`).toString().split(`
`);
let num0 = input[0]*input[1].split('')[2];
let num1 = input[0]*input[1].split('')[1]*10;
let num2 = input[0]*input[1].split('')[0];

let result = num0+num1*10+num2*100;
console.log(num0);
console.log(num1);
console.log(num2);
console.log(result);