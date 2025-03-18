//a 빈병
//b 받는 콜라
//n 마트가 주는 빈병
function solution(a, b, n) {
    if(n < a) return 0;
    
    const cola = (Math.floor(n / a)) * b;
    const emptyBottle = Number.isInteger(n / a) ? 0 : n % a;
    
    const resut = solution(a, b, cola + emptyBottle);
    
    return resut + cola;
}