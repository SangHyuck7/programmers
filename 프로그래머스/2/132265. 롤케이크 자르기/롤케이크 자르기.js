// 반복문으로 중간지점 잘라 왼쪽 오른쪽 종류 비교
function solution(topping) {
    const leftMap = new Map();
    const rightMap = new Map();
    let answer = 0;
    
    for (const item of topping) {
        rightMap.set(item, (rightMap.get(item) || 0) + 1);
    }
    
    for (let i = 0; i < topping.length; i++) {
        const item = topping[i];   
        
        leftMap.set(item, (leftMap.get(item) || 0) + 1);
        rightMap.set(item, rightMap.get(item) - 1);
        
        if (rightMap.get(item) === 0) rightMap.delete(item);
        
        if (leftMap.size === rightMap.size) {
            answer++;
        }
    }
    
    return answer;
}