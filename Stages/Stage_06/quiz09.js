let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim();
let count = 0;
for(let i=0; i<input.length; i++){
    // console.log(`${input[i]}${input[i+1]}`);
    switch(`${input[i]}${input[i+1]}`){
        case 'c=':
        case 'c-':
        case 'd-':
        case 'lj':
        case 'nj':
        case 's=':
        case 'z=':
            break;  
        case 'dz':
            if(`${input[i+2]}` == '='){
                count -= 1;
            }
            count++;
            break;
        default :
            count++;
            break;
    }
}
console.log(count)