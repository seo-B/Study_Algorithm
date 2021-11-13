// 25_robotPath
// robotPath
// 문제
// 세로와 가로의 길이가 각각 M, N인 방의 지도가 2차원 배열로 주어졌을 때, 1은 장애물을 의미하고 0 이동이 가능한 통로를 의미합니다. 로봇은 지도 위를 일분에 한 칸씩 상하좌우로 이동할 수 있습니다. 로봇의 위치와 목표 지점이 함께 주어질 경우, 로봇이 목표 지점까지 도달하는 데 걸리는 최소 시간을 리턴해야 합니다.

// 입력
// 인자 1 : room
// 배열을 요소로 갖는 배열
// room.length는 M
// room[i]는 number 타입을 요소로 갖는 배열
// room[i].length는 N
// room[i][j]는 세로로 i, 가로로 j인 지점의 정보를 의미
// room[i][j]는 0 또는 1
// 인자 2 : src
// number 타입을 요소로 갖는 배열
// src.length는 2
// src[i]는 0 이상의 정수
// src의 요소는 차례대로 좌표평면 위의 y좌표, x좌표
// 인자 3 : dst
// number 타입을 요소로 갖는 배열
// dst.length는 2
// dst[i]는 0 이상의 정수
// dst의 요소는 차례대로 좌표평면 위의 y좌표, x좌표
// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// M, N은 20 이하의 자연수입니다.
// src, dst는 항상 로봇이 지나갈 수 있는 통로입니다.
// src에서 dst로 가는 경로가 항상 존재합니다.
// 입출력 예시
// let room = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0],
//   [0, 1, 0, 0, 0, 0],
//   [0, 0, 1, 1, 1, 0],
//   [1, 0, 0, 0, 0, 0],
// ];
// let src = [4, 2];
// let dst = [2, 2];
// let output = robotPath(room, src, dst);
// console.log(output); // --> 8

const robotPath = function (room, src, dst) {
  // BFS
  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];

  let q = [src];

  while (q.length > 0) {
    let [r, c] = q.shift();
    for (let i = 0; i < 4; i++) {
      // 상하좌우 탐색
      let nr = r + dr[i];
      let nc = c + dc[i];
      if (nr >= 0 && nr < room.length && nc >= 0 && nc < room[0].length) {
        // 다음 좌표가 room의 범위안에 있을 경우
        if (room[nr][nc] === 0) {
          // 다음 좌표가 갈 수 있는 곳인 경우
          q.push([nr, nc]);
          room[nr][nc] = room[r][c] + 1;
        }
      }
      if (nr === dst[0] && nc === dst[1]) {
        return room[r][c] + 1; // 목표좌표인 경우 현재까지 온 거리 +1 리턴
      }
    }
  }
  return -1;
};
