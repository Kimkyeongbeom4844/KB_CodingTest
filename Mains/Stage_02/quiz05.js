let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().split(" ");
let $hour = Number(input[0]);
let $min = Number(input[1]);

if($min<45){
    if($hour == 0){
        $min = $min+15;
        $hour = 23;
    }
    else{
        $min = $min+15;
        $hour--
    } 
}
else {
    $min = $min-45;
}
console.log(`${$hour} ${$min}`);