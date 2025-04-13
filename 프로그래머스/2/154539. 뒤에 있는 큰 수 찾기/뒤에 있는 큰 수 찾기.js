// 투포인터 방식으로 처음 시도했지만 시간초과
// function solution(numbers) {
//     const result = [];
//     let rigth = 0;
    
//     for (let i = 0; i < numbers.length; i++) {
//         rigth = i + 1;
        
//         while (rigth <= numbers.length) {
//             if (rigth === numbers.length) {
//                 result.push(-1);
//                 break;
//             }
            
//             if (numbers[i] < numbers[rigth]) {
//                 result.push(numbers[rigth]);
//                 break;
//             }

//             rigth++;
//         }
//     }

//     return result;
// }

//스택 방법 인덱스를 스텍에 저장 해설 참고
function solution(numbers) {
    const result = new Array(numbers.length).fill(-1);
    const stack = [];

    for (let i = 0; i < numbers.length; i++) {
        while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
            const idx = stack.pop();
            result[idx] = numbers[i];
        }
        
        stack.push(i);
    }

    return result;
}