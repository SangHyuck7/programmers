function solution(a, b) {
    const firstArr = a;
    const secondArr = b;
    let hightIndex = Math.max(a.length, b.length);
    
    if (firstArr.length !== hightIndex) {
        for (let i = 0; i < hightIndex - firstArr.length; i++) {
            firstArr.push(0);
        }
    }
    
    if (secondArr.length !== hightIndex) {
        for (let i = 0; i < hightIndex - secondArr.length; i++) {
            secondArr.push(0);
        }
    }
    
    const dotProductArr = firstArr.map((value, index) => [value, secondArr[index]]);
    
    const result = dotProductArr.reduce((accumulator, currentValue) => {
     return accumulator + (currentValue[0] * currentValue[1]);
    }, 0);
    
    return result;
}