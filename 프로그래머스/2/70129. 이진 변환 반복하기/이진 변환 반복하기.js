function solution(s) {
    let count = 0;
    let zeroCount = 0;

    while (s !== "1") {
        const zeros = s.split('').filter(c => c === '0').length;
        zeroCount += zeros;

        s = s.replace(/0/g, '');

        s = s.length.toString(2);

        count++;
    }

    return [count, zeroCount];
}