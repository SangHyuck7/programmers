function solution(clothes) {
    const map = {};

    for (let [item, type] of clothes) {
        map[type] = (map[type] || 0) + 1;
    }
    
    let combinations = 1;
    for (let count of Object.values(map)) {
        combinations *= (count + 1);
    }
    
    return combinations - 1;
}