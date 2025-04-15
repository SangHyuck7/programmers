function solution(elements) {
    const n = elements.length;
    const extended = elements.concat(elements);
    const sums = new Set();

    for (let len = 1; len <= n; len++) {
        let sum = 0;

        for (let i = 0; i < len; i++) {
            sum += extended[i];
        }
        sums.add(sum);

        for (let i = len; i < n + len - 1; i++) {
            sum = sum - extended[i - len] + extended[i];
            sums.add(sum);
        }
    }

    return sums.size;
}