/*
풀이 실패 이유: 서버가 필요한 부분 윈도우 슬라이드 방식으로 m 만큼 잘라서
사용했지만 공집합 부분에서 문제가 있어서 문제 풀이 실패로 해설 참고하여 문제 풀이
*/

function solution(players, m, k) {
  const servers = Array(24 + k).fill(0);
  let currentServers = 0;
  let totalCount = 0;

  for (let i = 0; i < 24; i++) {
    currentServers -= servers[i];

    const requiredServers = players[i] < m ? 0 : Math.floor(players[i] / m);

    if (currentServers < requiredServers) {
      const additionalServers = requiredServers - currentServers;
      servers[i + k] += additionalServers;
      currentServers += additionalServers;
      totalCount += additionalServers;
    }
  }

  return totalCount;
}