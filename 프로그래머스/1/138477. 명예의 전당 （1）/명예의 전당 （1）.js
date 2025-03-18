function solution(k, score) {
    if (k <= 0 || score.length === 0) return [];

    const minHeap = [];
    const result = [];

    for (let i = 0; i < score.length; i++) {
        if (minHeap.length < k) {
            minHeap.push(score[i]);
            minHeap.sort((a, b) => a - b);
        } else {
            if (score[i] > minHeap[0]) {
                minHeap[0] = score[i]; 
                minHeap.sort((a, b) => a - b);
            }
        }
        result.push(minHeap[0]);
    }

    return result;
}