function solution(n, w, p) {
    let num = 1;
    const h = Math.ceil(n / w);
    let result = 1;
    const grid = Array.from({ length: h }, () => new Array(w).fill(0));
    
    
    for (let row = 0; row < h; row++) {
        if (row % 2 === 0) {
            for (let col = 0; col < w; col++) {
                if (num <= n) grid[row][col] = num++;
            }       
        } else {
             for (let col = w - 1; col >= 0; col--) {
                if (num <= n) grid[row][col] = num++;
            }   
        }
    }
    
    const rowPosion = Math.ceil(p / w);
    let colPosion = (p - 1) % w;

    if (rowPosion % 2 === 0) {
        colPosion = w - 1 - colPosion;
    }
    
    for (let i = rowPosion; i < grid.length; i++) {
        if (grid[i][colPosion]) {
            result++;
        }
    }
    
    return result;
}