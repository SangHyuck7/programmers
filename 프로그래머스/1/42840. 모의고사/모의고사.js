function solution(answers) {
    const studentAnswers = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    const studentResult = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if(answers[i] === studentAnswers[0][i % studentAnswers[0].length]) {
            studentResult[0]++;
        }
        
        if(answers[i] === studentAnswers[1][i % studentAnswers[1].length]) {
            studentResult[1]++;
        }
        
        if(answers[i] === studentAnswers[2][i % studentAnswers[2].length]) {
            studentResult[2]++;
        }
    }
    
    let topResult = Math.max.apply(null, studentResult);
    
    const result = studentResult.map((num, index) => {
        if (num === topResult) {
            return index + 1
        }
    });
    
    return result.filter(Boolean);
}