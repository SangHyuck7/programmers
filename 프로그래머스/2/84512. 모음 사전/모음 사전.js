//가중치 사용
function solution(word) {
    const weight = [];
    const alpha = ['A', 'E', 'I', 'O', 'U'];
    
    let result = 0;
    
    for (let i = 0; i < 5; i++) {
        let sum = 0;
        
        for (let j = i; j < 5; j++) {
            sum += 5 ** (4 - j);
        }
    
        weight.push(sum);
    }

    for (let i = 0; i < word.length; i++) {
        const index = alpha.indexOf(word[i]);
        result += index * weight[i] + 1;
    }
    
    return result;
}