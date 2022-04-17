let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim().split("\n");
let count = Number(input[0]);
let output = ``;
for(let i=1; i<=count; i++){
    let sum = 0;
    let div = 0;
    let arr = [];
    let inCount = Number(input[i].split(" ")[0]);
    for(let j=1; j<=inCount; j++){
        sum += Number(input[i].split(" ")[j]);
        arr.push(input[i].split(" ")[j])
    }
    arr.forEach(x=>{
        if(x>sum/inCount){
            div++;
        }
    })
    output += `${(100*div/inCount).toFixed(3)}%
`
}
console.log(output);