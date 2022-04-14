let fs = require('fs');
let input = fs.readFileSync('../예제.txt').toString().split(" ");
let num = [];
for (let i=0; i<input.length; i++){
    num[i] = Number(input[i]);
}
console.log(num[0]+num[1]);
console.log(num[0]-num[1]);
console.log(num[0]*num[1]);
console.log(Math.floor(num[0]/num[1]));
console.log(num[0]%num[1]);