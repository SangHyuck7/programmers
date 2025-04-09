function solution(k, tangerine) {
  const map = new Map();

  for (const size of tangerine) {
    map.set(size, (map.get(size) || 0) + 1);
  }

  const sortedCounts = [...map.values()].sort((a, b) => b - a);

  let count = 0;
  let kinds = 0;

  for (let num of sortedCounts) {
    count += num;
    kinds++;
    if (count >= k) break;
  }

  return kinds;
}