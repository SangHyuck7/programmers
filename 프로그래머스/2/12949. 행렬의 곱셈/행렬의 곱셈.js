//가로줄 × 세로줄
function solution(arr1, arr2) {
    const result = [];

    const rowCount = arr1.length;
    const colCount = arr2[0].length;
    const commonLength = arr1[0].length;

    for (let i = 0; i < rowCount; i++) {
        const row = [];
        for (let j = 0; j < colCount; j++) {
            let sum = 0;
            for (let k = 0; k < commonLength; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }

    return result;
}