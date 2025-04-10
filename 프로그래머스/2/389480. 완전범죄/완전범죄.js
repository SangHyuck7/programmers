function solution(info, n, m) {
    let result = Infinity;
    const visited = new Set();

    function dfs (i, a, b) {
        if (a >= n || b >= m) return;
        
        const key = `${i},${a},${b}`;
        if (visited.has(key)) return;
        visited.add(key);
        
        if (i === info.length) {
            result = Math.min(result, a);
            
            return;
        }
        
        dfs(i + 1, a + info[i][0], b);
        dfs(i + 1, a, b + info[i][1]);
    }
    
    dfs(0, 0, 0);
    
    return result === Infinity ? -1 : result;
}