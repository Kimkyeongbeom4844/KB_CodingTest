let fs = require('fs');
let input = fs.readFileSync('../sample.txt').toString().trim()
let alpine = {}
let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let output = '';
let count = 1;
for(let i=0; i<input.length; i++){
    if(!alpine[input[i]]){
        alpine[input[i]] = count;
        count++;
    }else{
        count++;
    }
}
let res = abc.map(x=>{
    if(alpine[x]){
        return x = alpine[x]-1;
    }
    else {
        return x = -1;
    }
})
for(let i=0; i<res.length; i++){
    output += `${res[i]} `;
}
console.log(output);