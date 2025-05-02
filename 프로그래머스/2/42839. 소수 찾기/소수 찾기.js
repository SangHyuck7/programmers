// 시간초과 발생
// function solution(numbers) {
//     const nums = numbers.split('');
//     const visited = new Set();
//     const result = new Set();
    
//     // 소수 확인 함수 참고 
//     const isPrime = (n) => {
//         if (n <= 1) return false;
        
//         for (let i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) return false;
//         }
        
//         return true;
//      };
    
//     const bfs = () => {
//         const queue = [''];
        
//         while (queue.length > 0) {
//             const curr = queue.shift();
            
//             if (curr.length > 0) {
//                 const num = parseInt(curr, 10);    
                
//                 if (!visited.has(num)) {
//                     visited.add(num);
                    
//                     if (isPrime(num)) {
//                         result.add(num);
//                     }
                    
//                 }
//             }
            
//             for (let i = 0; i < nums.length; i++) {
//                 if (curr.split('').filter(c => c === nums[i]).length < nums.filter(n => n === nums[i]).length) {
//                     queue.push(curr + nums[i]);
//                 }    
//             }
//         }
//     };
    
//     bfs();
    
//     return result.size;
// }

function solution(numbers) {
  const nums = numbers.split('');
  const used = new Array(nums.length).fill(false);
  const result = new Set();

  const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const dfs = (path) => {
    if (path.length > 0) {
      const num = parseInt(path.join(''), 10);
      if (isPrime(num)) result.add(num);
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);

      dfs(path);

      path.pop();
      used[i] = false;
    }
  };

  dfs([]);

  return result.size;
}