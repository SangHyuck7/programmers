function solution(s) {
    const charArr = s.split(" ");
    
    for (let i = 0; i < charArr.length; i++) {
        if (charArr[i]) {
            const firstChar = charArr[i].charAt(0);
            if (/[a-zA-Z]/.test(firstChar)) {
                charArr[i] = firstChar.toUpperCase() + charArr[i].slice(1).toLowerCase();
            } else {
                charArr[i] = firstChar + charArr[i].slice(1).toLowerCase();
            }
        }
    }

    return charArr.join(" ");
}