function solution(n, words) {
    const unionWords = new Set([]);
    let lastWords = "";
    
    for (let i = 0; i < words.length; i++) {
        if (validation(words[i])) {
            unionWords.add(words[i]);
            lastWords = words[i];
            
        } else {
            const rejectMember = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [rejectMember, turn]
        }
    }
    
    function validation (words) {
        if (!lastWords) return true;
            
        if (unionWords.has(words) || lastWords[lastWords.length - 1] !== words[0]) {
            return false;
        }
        
        return true;
    }
    
  return [0, 0];
}