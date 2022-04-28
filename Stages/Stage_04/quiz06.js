let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim().split("\n");
let count = Number(input[0]);
let output = '';
for(let i=1; i<=count; i++){
    let sum = 0;
    let point = 1;
    input[i].split("").forEach(x=>{
        if(x=='O'){
            sum += point;
            point++;
        }else{
            point = 1;
        }
    })
    output += `${sum}
`
}
console.log(output);