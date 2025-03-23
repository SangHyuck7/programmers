function solution(numbers) {
    const result = [];
    let count = numbers.length - 1;
    
    for (let i = 0; i < numbers.length - 1; i++) {
        
        while (i < count) {
            result.push(numbers[i] + numbers[count]);
            count--;
        }
        
        count = numbers.length - 1;
    }
    
    return [...new Set(result)].sort((a, b) => a - b);
}