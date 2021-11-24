// 28_robotPath2
// robotPath2
// 문제
// 세로와 가로의 길이가 각각 M, N인 방의 지도가 2차원 배열로 주어졌을 때, 1은 장애물을 의미하고 0 이동이 가능한 통로를 의미합니다. 로봇은 한 번에 임의의 k칸 직진과 90도 회전 중 1가지 동작을 할 수 있다. 로봇의 현재 위치와 방향, 목표 지점과 방향이 함께 주어집니다. 이 때, 방향은 위쪽이 1, 오른쪽이 2, 아래쪽이 3, 왼쪽이 4로 주어집니다. 로봇이 목표 지점까지 도달해 목표 방향으로 회전하는 데 필요한 동작의 수를 리턴해야 합니다.

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
// 인자 3 : sDir
// number 타입의 자연수
// 인자 4 : dst
// number 타입을 요소로 갖는 배열
// dst.length는 2
// dst[i]는 0 이상의 정수
// dst의 요소는 차례대로 좌표평면 위의 y좌표, x좌표
// 인자 3 : dDir
// number 타입의 자연수
// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// M, N은 20 이하의 자연수입니다.
// src, dst는 항상 로봇이 지나갈 수 있는 통로입니다.
// src에서 dst로 가는 경로가 항상 존재합니다.
// 목표 지점에 도달한 후 방향까지 일치해야 합니다.
// 직진은 1칸 직진이 아니라 임의의 k칸을 직진할 수 있습니다. 즉 한번의 직진 명령으로 장애물이 없는 한 계속 갈 수 있습니다.
// 왼쪽에서 오른쪽 또는 아래에서 위쪽으로 방향을 바꾸는 데 총 2번의 회전 동작이 필요합니다.
// 입출력 예시
// let room = [
//   [0, 0, 0, 0],
//   [0, 1, 1, 0],
//   [0, 1, 0, 0],
//   [0, 0, 1, 1],
// ];
// let src = [3, 0];
// let sDir = 3;
// let dst = [2, 2];
// let dDir = 2;
// let output = robotPath2(room, src, sDir, dst, dDir);
// console.log(output); // --> 11
/*
1. 시작 - (3, 0)에서 아래 방향을 향한 상태
장애물은 x로 표시, 출발지점은 s로 표시
[
  [0, 0, 0, 0],
  [0, x, x, 0],
  [0, x, 0, 0],
  [s, 0, x, x],
]

2. 로봇은 아래 방향을 향하고 있음
  3인 이유: 위로 가기 위해서는 90도 회전이 2번, 직진 1번 필요함. 직진 한번으로 도달할 수 있는 모든 칸을 표기.
  2인 이유: 오른쪽으로 가기 위해서는 90도 회전 1번, 직진 1번이 필요함
[
  [3, 0, 0, 0],
  [3, x, x, 0],
  [3, x, 0, 0],
  [s, 2, x, x],
]

3. (0, 0) 지점에서 로봇은 위 방향을 향하고 있음
  5인 이유: 오른쪽으로 가기 위해서는 90도 회전이 1번, 직진 1번 필요함.
  1인 이유: 직진 1번으로 충분
[
  [3, 5, 5, 5],
  [3, x, x, 0],
  [3, x, 0, 0],
  [s, 2, x, x],
]

4. 비슷한 방식으로 계산하면 최종적으로 방향 전환까지 11번이 나오게 된다.
*/

// room = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0],
//   [0, 1, 0, 0, 0, 0],
//   [0, 0, 1, 1, 1, 0],
//   [1, 0, 0, 0, 0, 0],
// ];
// src = [4, 2];
// sDir = 1;
// dst = [2, 2];
// dDir = 3;
// output = robotPath2(room, src, sDir, dst, dDir);
// console.log(output); // --> 7

const robotPath2 = function (room, src, sDir, dst, dDir) {
  // 방, 출발지점, 출발방향회전수?, 도착지점, 도착방향회전수?
  const [roomLength, clean] = [room.length, room[0].length];
  const dr = [0, -1, 0, 1, 0];
  const dc = [0, 0, 1, 0, -1];
  let q = [[...src, sDir, 0, false]];

  const mover = (setted, dir, count, toggle) => {
    let [r, c] = setted;
    while (true) {
      let [nr, nc] = [r + dr[dir], c + dc[dir]];
      if (r === dst[0] && c === dst[1]) break;
      if (nr >= roomLength || nc >= clean || nr < 0 || nc < 0) break;
      if (room[nr][nc] === 1) break;
      [r, c] = [nr, nc];
      q.push([r, c, dir, count + 1, toggle]);
    }
    room[r][c] = 1;
  };

  let tempRes;

  while (q.length > 0) {
    let [r, c, d, count, toggle] = q.shift();
    let [nr, nc] = [r + dr[d], c + dc[d]];
    // d방향으로 진행할 수 있으면 mover에 넣어주고 나머지 방향을 q에 넣어준다.
    if (r === dst[0] && c === dst[1]) {
      tempRes = [count, d];
      break;
    }
    if (nr >= 0 && nr < rlen && nc >= 0 && nc < clen && room[nr][nc] !== 1) {
      mover([r, c], d, count, false);
    }
    for (let i = 1; i <= 4; i++) {
      if (toggle === true) continue;
      const flag = d % 2;
      if (i !== d) {
        if (i % 2 === flag) q.push([r, c, i, count + 2, true]);
        else q.push([r, c, i, count + 1, true]);
      }
    }
    room[src[0]][src[1]] = 1;
  }

  if (!tempRes) return -1;

  return;
};
