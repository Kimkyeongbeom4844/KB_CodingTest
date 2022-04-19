let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim().toUpperCase().split("");
let result = {};
let maxNum = 0;
let max = ``;
let logic = (x) => {
    if(result[x]>maxNum){
        maxNum = result[x];
        max = `${x}`;
    }
    else if(result[x]==maxNum){
        maxNum = result[x];
        max = `?`;
    }
}
input.forEach(x=>{
    if(result[x]){
        result[x]++;
        logic(x);
    }
    else{
        result[x] = 1;
        logic(x);
    }
})

console.log(max)