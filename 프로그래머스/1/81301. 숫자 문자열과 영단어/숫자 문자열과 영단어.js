function solution(s) {
    let result = "";
    let counter = 0;
    const numberSentenceArr = [...s];
    const numberTypeList = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }
    
    while (numberSentenceArr.length) {
        if (!isNaN(Number(numberSentenceArr[0]))) {
            result += numberSentenceArr.splice(0,1);
            counter = 0;
            
        } else {
            const word = numberSentenceArr.slice(0, counter + 1).join("");
            
            if (numberTypeList.hasOwnProperty(word)) {
                numberSentenceArr.splice(0, counter + 1);
                result += numberTypeList[word];
                counter = 0;
            } else {
                counter++; 
            }
        }
    }
    
    return Number(result);
}