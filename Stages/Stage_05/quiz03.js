let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim();
let max = Number(input);
let arr = [];
let count = 0;
for(let i=1; i<=max; i++){
    arr.push(String(i))
    if(Number(arr[i-1])<100){
        count++
    }
    else if(Number(arr[i-1])<1000){
        let max = arr[i-1].length;
        for(let j=0; j<=max-1; j++){
            if(arr[i-1][j] - arr[i-1][j+1] == arr[i-1][j+1] - arr[i-1][j+2]){
                count++;
            }
        }
    }
}
console.log(count)