let fs = require(`fs`);
let input = fs.readFileSync(`../sample.txt`).toString().trim()
let num = Number(input);
console.log(num);
if(90<=num && num <=100){
    console.log(`A`);
}
else if(80<=num && num <=89){
    console.log(`B`);
}
else if(70<=num && num <=79){
    console.log(`C`);
}
else if(60<=num && num <=69){
    console.log(`D`);
}
else {
    console.log(`F`);
}