function solution(survey, choices) {
    var answer = '';
    let len = survey.length;
    let arr = [['R',0,'T',0],['C',0,'F',0],['J',0,'M',0],['A',0,'N',0]];
    for(let i=0; i<choices.length; i++){
        switch(choices[i]){
            case 1 :
                for(let j=0; j<4; j++){ 
                    if(arr[j].indexOf(survey[i][0]) !== -1){
                        arr[j][(arr[j].indexOf(survey[i][0]))+1] += 3;
                    }
                }
                break;
            case 2 :
                for(let j=0; j<4; j++){ 
                    if(arr[j].indexOf(survey[i][0]) !== -1){
                        arr[j][(arr[j].indexOf(survey[i][0]))+1] += 2;
                    }
                }
                break;
            case 3 :
                for(let j=0; j<4; j++){ 
                    if(arr[j].indexOf(survey[i][0]) !== -1){
                        arr[j][(arr[j].indexOf(survey[i][0]))+1] += 1;
                    }
                }
                break;
            case 5 :
                for(let j=0; j<4; j++){ 
                    if(arr[j].indexOf(survey[i][1]) !== -1){
                        arr[j][(arr[j].indexOf(survey[i][1]))+1] += 1;
                    }
                }
                break;
            case 6 :
                for(let j=0; j<4; j++){ 
                    if(arr[j].indexOf(survey[i][1]) !== -1){
                        arr[j][(arr[j].indexOf(survey[i][1]))+1] += 2;
                    }
                }
                break;
            case 7 :
                for(let j=0; j<4; j++){ 
                    if(arr[j].indexOf(survey[i][1]) !== -1){
                        arr[j][(arr[j].indexOf(survey[i][1]))+1] += 3;
                    }
                }
                break;
            default :
                break;
        }
    }
    for(let i=0; i<4; i++){
        if(arr[i][1]>arr[i][3]){
            answer += `${arr[i][0]}`
        }
        else if(arr[i][1]<arr[i][3]){
            answer += `${arr[i][2]}`
        }
        else {
            answer += `${arr[i][0]}`
        }
    }
    return answer;
}