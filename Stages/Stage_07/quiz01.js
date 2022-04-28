let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim().split(' ');
let i = 0;
let left = (i) => {
    return Number(input[0])+Number(input[1])*i;
} 
let right = (i) => {
    return Number(input[2])*i;
}
if(Number(input[1])>=Number(input[2])){
    console.log('-1');
}
else {
    if(right(i)>left(i)){
        console.log(i);
    }
    else {
        loop: while(left(i)>=right(i)){
            i++
            if(right(i)>left(i)){
                console.log(i)
                break;
            }
        }
        
    }
    
}
