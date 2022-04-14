let fs = require(`fs`);
let input = fs.readFileSync('../sample.txt').toString().split(`
`);
let $X = Number(input[0]);
let $Y = Number(input[1]);

if($X > 0 && $Y > 0){
    console.log(1);
}
else if($X > 0 && $Y < 0){
    console.log(4);
}
else if($X < 0 && $Y > 0){
    console.log(2);
}
else if($X < 0 && $Y < 0){
    console.log(3);
}