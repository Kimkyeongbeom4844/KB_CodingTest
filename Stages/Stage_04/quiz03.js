let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().split("\n");
let firstNum = [];
let secondNum = [];
let thirdNum = [];
let zero = 0;
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let seven = 0;
let eight = 0;
let nine = 0;
for(let i=0; i<3; i++){
    firstNum[i] = Number(input[0].split("")[i]);
    secondNum[i] = Number(input[1].split("")[i]);
    thirdNum[i] = Number(input[2].split("")[i]);
}
let firsttry=Number(input[0])*secondNum[2]+Number(input[0])*secondNum[1]*10+Number(input[0])*secondNum[0]*100
let secondtry =  firsttry*thirdNum[2]+firsttry*thirdNum[1]*10+firsttry*thirdNum[0]*100;
let result = secondtry.toString().split("");
for(let i=0; i<result.length; i++){
    switch(result[i]){
        case `0` :
            zero++;
            break;
        case `1` :
            one++;
            break;
        case `2` :
            two++;
            break;
        case `3` :
            three++;
            break;
        case `4` :
            four++;
            break;
        case `5` :
            five++;
            break;
        case `6` :
            six++;
            break;
        case `7` :
            seven++;
            break;
        case `8` :
            eight++;
            break;
        case `9`:
            nine++;
            break;
    }
}
console.log(`${zero}
${one}
${two}
${three}
${four}
${five}
${six}
${seven}
${eight}
${nine}`)