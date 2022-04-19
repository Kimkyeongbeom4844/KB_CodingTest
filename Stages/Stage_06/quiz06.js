let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim().split(" ");
if(input[0]){
    console.log(input.length)
}
else{
    console.log(0);
}