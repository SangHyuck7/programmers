function solution(s) {
  const stack = [];

  for (const char of s) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

// 효율성 테스트 통과 실패 
// function solution(s) {
//     const result = s.split("");
//     let count = 0;
    
//     while (count < result.length) {
//         if (result[count] === result[count + 1]) {
//             result.splice(count, 2);
            
//             count = count - 1 < 0 ? 0 : count - 1;
//         } else {
//             count++;
//         }
//     }
    
//     return result.length === 0 ? 1 : 0;
// }