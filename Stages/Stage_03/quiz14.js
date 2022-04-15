let fs = require('fs');
let num = Number(fs.readFileSync('../sample.txt').toString().trim());
if(num < 10){
    num = num*10;
}
let origin = num;
let count = 0;
do{
    let first10 = parseInt(num/10);
    let first1 = num%10;
    let second = first10+first1;
    let second1 = second%10;
    num = first1*10+second1;
    count++;
}while(num != origin);
console.log(count);