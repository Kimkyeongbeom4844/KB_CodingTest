let seltNum = (n) => {
    let max = [];
    let $pop = [];
    let output = ``;

    for(let i=1; i<=n; i++){
        max.push(i)
        let $i = String(i);
        let sum = i;
        let $iLen = $i.split("").length;
        for(let j=0; j<$iLen; j++){
            sum += Number($i.split("")[j]);
        }
        $pop.push(sum);
    }
    
    //arr.filter() -> 기존의 배열(arr)에서 조건이 맞는 것만 남긴 후 새로운 배열(res)을 생성
    const res = max.filter(n => !$pop.includes(n));
    
    for(let i=0; i<res.length; i++){
        output += res[i] + '\n';
    }
    console.log(output)
}

seltNum(10000);