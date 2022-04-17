let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim().split("\n");
let gabage = input.map(x=>x%42);
let result = {};
gabage.forEach((x)=>{
    if(result[x]){
        result[x]++;
    }
    else{
        result[x] = 1;
    }
})
console.log(Object.keys(result).length);