let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().split(" ")
let $1 = Number(input[0]);
let $2 = Number(input[1]);
let $3 = Number(input[2]);
if($1 == $2 || $2 == $3 || $3 == $1){
    if($1 == $2 && $2 == $3 && $3 == $1){
        console.log(`${10000+$1*1000}`)
    }
    else if($1 == $2){
        console.log(`${1000+$1*100}`);
    }
    else if($2 == $3){
        console.log(`${1000+$2*100}`);
    }
    else if($3 == $1){
        console.log(`${1000+$3*100}`);
    }
}
else {
    if($1 > $2 && $1 > $3){
        console.log(`${$1*100}`);
    }
    else if($2 > $1 && $2 > $3){
        console.log(`${$2*100}`);
    }
    else{
        console.log(`${$3*100}`);
    }
}