// function solution(n) {
//     const MOD = 1234567;
//     const memo = [0, 1];

//     const fibonacci = num => {
//       if (memo[num] !== undefined) return memo[num];
//       return memo[num] = (fibonacci(num - 1) + fibonacci(num - 2)) % MOD;
//     }

//     return fibonacci(n);
// } 
// 재귀로 풀이시 런타임 에러 발생

function solution(n) {
  const MOD = 1234567;
  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const next = (a + b) % MOD;
    a = b;
    b = next;
  }

  return b;
}