const changeBinary = (n, arr) => {
  return arr.map(num => {
    const binary = num.toString(2).padStart(n, '0');
    return [...binary];
  });
}

function solution(n, arr1, arr2) {
    const firstMap = changeBinary(n, arr1);
    const secondMap = changeBinary(n, arr2);
    const result = new Array(n).fill("");

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if(Number(firstMap[i][j]) || Number(secondMap[i][j])) {
                result[i] += "#";
            } else {
                result[i] += " ";
            }
        }
    }
    
    return result;
}

