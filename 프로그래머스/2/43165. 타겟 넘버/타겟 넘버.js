function solution(numbers, target) {
    let result = 0;
    
    const dfs = (index, number) => {
        if (index === numbers.length) {
            if (target === number) {
                result++;
            }
            
            return;
        }
        
        dfs(index + 1, number + numbers[index]);
        dfs(index + 1, number - numbers[index]);
    }
    
    dfs(0, 0);
    return result;
}