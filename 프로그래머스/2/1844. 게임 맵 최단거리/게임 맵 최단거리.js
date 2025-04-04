function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;

    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [];

    queue.push([0, 0, 1]);
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();

        if (x === n - 1 && y === m - 1) return steps;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
                nx >= 0 && nx < n &&
                ny >= 0 && ny < m &&
                maps[nx][ny] === 1 &&
                !visited[nx][ny]
            ) {
                visited[nx][ny] = true;
                queue.push([nx, ny, steps + 1]);
            }
        }
    }

    return -1;
}

//dfs 방식 (효율성 테스트 실패)

// function solution(maps) {
//     const n = maps.length;
//     const m = maps[0].length;
//     const visited = Array.from({ length: n }, () => Array(m).fill(false));
//     let minSteps = Infinity;

//     const dx = [0, 0, 1, -1];
//     const dy = [1, -1, 0, 0];

//     const dfs = (x, y, steps) => {
//         if (x === n - 1 && y === m - 1) {
//             minSteps = Math.min(minSteps, steps);
//             return;
//         }

//         for (let dir = 0; dir < 4; dir++) {
//             const nx = x + dx[dir];
//             const ny = y + dy[dir];

//             if (
//                 nx >= 0 && nx < n &&
//                 ny >= 0 && ny < m &&
//                 maps[nx][ny] === 1 &&
//                 !visited[nx][ny]
//             ) {
//                 visited[nx][ny] = true;
//                 dfs(nx, ny, steps + 1);
//                 visited[nx][ny] = false; //백트래킹
//             }
//         }
//     };

//     visited[0][0] = true;
//     dfs(0, 0, 1);

//     return minSteps === Infinity ? -1 : minSteps;
// }