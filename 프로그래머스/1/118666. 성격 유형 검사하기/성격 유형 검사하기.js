function solution(survey, choices) {
    const score = [3, 2, 1, 0, 1, 2, 3];
    const pairs = ["RT", "CF", "JM", "AN"];
    const type = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    }
    let result = "";
    
    for (let i = 0; i < survey.length; i++) {
        if (choices[i] === 4) continue;
        
        const [firstChar, secondChar] = survey[i].split("");
        
        if (choices[i] < 4) {
            type[firstChar] += score[choices[i] - 1];
        } else {
            type[secondChar] += score[choices[i] - 1];
        }
    }
    
    pairs.forEach(pair => {
        const [firstChar, secondChar] = pair.split("");
        
        if (type[firstChar] === type[secondChar]) {
            result += firstChar < secondChar ? firstChar : secondChar;
        } else {
            type[firstChar] > type[secondChar] ? result += firstChar : result += secondChar;
        }
    });
    
    return result;
}