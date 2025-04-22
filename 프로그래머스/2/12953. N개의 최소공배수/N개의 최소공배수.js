// LCM(a, b) = (a × b) / GCD(a, b)
// 최대공약수(GCD) 구하기 - 유클리드 호제법
// 참고: https://namu.wiki/w/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C%20%ED%98%B8%EC%A0%9C%EB%B2%95
function solution(arr) {
    // 최대공약수 (GCD)
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    // 최소공배수 (LCM)
    const lcm = (a, b) => (a * b) / gcd(a, b);

    // 배열의 모든 수에 대해 LCM 계산
    return arr.reduce((acc, curr) => lcm(acc, curr));
}