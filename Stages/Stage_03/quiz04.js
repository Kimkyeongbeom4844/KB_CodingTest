let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');
let max = Number(input[0]);
let output = '';
for(let i=1; i<=max; i++){
    output += `${Number(input[i].split(' ')[0])+Number(input[i].split(' ')[1])}
`;
}
console.log(output);

//----- answer라는 빈 문자열을 만들고, for문을 통해 문자열을 추가, 이후 \n을 사용하여 개행 -----
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let max = Number(input[0]);
// let answer = '';

// for (let i = 1; i <= max; i++) {
//     let num = input[i].split(' ');
//     answer += Number(num[0]) + Number(num[1]) + '\n';
// }

// console.log(answer);