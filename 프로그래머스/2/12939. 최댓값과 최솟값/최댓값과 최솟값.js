function solution(s) {
    const numList = s.split(" ");
    const result = [Math.min(...numList), Math.max(...numList)];
    
    return result.join(" ");
}