function solution(n) {
    const count = n.toString(2).split('').filter(char => char === '1').length;
    let result = null;
    
    while (!result) {
        const nextNum = n += 1;
        const nextNumCount = nextNum.toString(2).split('').filter(char => char === '1').length;
        
        if (count === nextNumCount) {
            result =  nextNum;
        }
    }
    
    return result;
}