// 재귀 방식으로 처음 풀었지만 시간복잡도 실패 bfs 방식 사용 
function solution(x, y, n) {
    const visited = new Set();
    const queue = [[x, 0]];
    let head = 0;

    while (head < queue.length) {
        const [curr, count] = queue[head];
        head++;

        if (curr === y) return count;
        if (curr > y || visited.has(curr)) continue;

        visited.add(curr);

        queue.push([curr + n, count + 1]);
        queue.push([curr * 2, count + 1]);
        queue.push([curr * 3, count + 1]);
    }

  return -1;
}