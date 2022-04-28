let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim().split("\n");
let max = Number(input[0]);
for(let i=1; i<=max; i++){
    let obj = [];
    let count = max;
    input[i] = input[i].trim();
    for(j=0; j<input[i].length; j++){
        if(obj[input[i][j]]){
            // if(obj[input[i][j]] == obj[input[i][j-1]]){
            //     console.log('tq')
            // }
            obj[input[i][j]]++;
        }
        else{
            obj[input[i][j]] = j;
        }
    }
    console.log(obj)
}
