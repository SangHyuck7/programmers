function solution(left, right) {
    let result = 0;

    for (let i = left; i <= right; i++) {
        let countDivisor = 0;
        
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                countDivisor++;
            }
        }
        
        if (countDivisor % 2 === 0) {
            result += i;
        } else {
            result -= i;
        }
    }
    
    return result;
}