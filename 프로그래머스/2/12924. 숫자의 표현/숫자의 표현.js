//  브루트포스 풀이 n - k * (k - 1) / 2가 양수이면서 k로 나누어 떨어지는지 확인
function solution(n) {
    let count = 0;

    for (let k = 1; k * (k - 1) / 2 < n; k++) {
        const temp = n - (k * (k - 1)) / 2;
        if (temp % k === 0) {
            count++;
        }
    }

    return count;
}