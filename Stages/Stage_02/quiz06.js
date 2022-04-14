let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().split(" ");
let $hour = Number(input[0]);
let input2 = input[1].split(`
`);
let $min = Number(input2[0]);
let $needs = Number(input2[1]);

if($min+$needs > 60){
    $hour += Math.floor(($min+$needs)/60);
    if($hour>23){
        $hour -= 24;
    }
    $min = ($min+$needs)%60;    
}
else if($min+$needs == 60){
    $hour += Math.floor(($min+$needs)/60);
    if($hour>23){
        $hour -= 24;
    }
    $min = 0;
}
else{
    $min += $needs;
}
console.log(`${$hour} ${$min}`);