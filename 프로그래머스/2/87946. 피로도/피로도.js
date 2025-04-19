function solution(k, dungeons) {
    let max = 0;

    const visited = new Array(dungeons.length).fill(false);

    function dfs(remainingFatigue, count) {
        max = Math.max(max, count);

        for (let i = 0; i < dungeons.length; i++) {
            const [minRequired, consume] = dungeons[i];

            if (!visited[i] && remainingFatigue >= minRequired) {
                visited[i] = true;
                dfs(remainingFatigue - consume, count + 1);
                visited[i] = false;
            }
        }
    }

    dfs(k, 0);
    return max;
}