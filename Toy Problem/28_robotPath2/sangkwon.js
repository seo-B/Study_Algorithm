const robotPath2 = function (room, src, sDir, dst, dDir) {
  // 가로와 세로의 길이
  const R = room.length;
  const C = room[0].length;
  // 4가지 방향: 위(1), 오른쪽(2), 아래(3), 왼쪽(4)
  // 차례대로 [방향, 상하이동, 좌우이동]
  const MOVES = [
    [1, -1, 0], // UP
    [2, 0, 1], // RIGHT
    [3, 1, 0], // DOWN
    [4, 0, -1], // LEFT
  ];

  // 맵을 벗어나는지 확인
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;

  // 각 위치별 최소의 동작으로 도달 가능한 경우의 "방향을 저장"
  const directions = [];
  // 각 위치별 최소 "동작의 수"를 저장. 편의상 거리(dist)로 표현
  const dist = [];
  for (let row = 0; row < R; row++) {
    directions.push(Array(C).fill(0));
    dist.push(Array(C).fill(Number.MAX_SAFE_INTEGER));
  }

  // bfs 구현을 위해 큐를 선언한다.
  const queue = []
  const enQueue = (queue, pos) => {
    queue.push(pos)
  };
  const deQueue = (queue) => {
    const pos = queue.shift()
    return pos
  };

  // 출발 지점의 좌표
  const [sRow, sCol] = src;
  directions[sRow][sCol] = sDir; //방향 저장
  dist[sRow][sCol] = 0; // 동작수 저장

  // 목표 지점의 좌표
  const [dRow, dCol] = dst;

  enQueue(queue, [sRow, sCol]); // queue에 출발 지점의 좌표를 넣는다.

  while (queue.length > 0) {
    const [row, col] = deQueue(queue);

    const dir = directions[row][col]; // 방향

    for (move of MOVES) {
      const [nDir, rDiff, cDiff] = move;
      // 이동할 좌표
      const nRow = row + rDiff;
      const nCol = col + cDiff;

      // 맵을 벗어나거나 장애물(1)이 있으면 건너 뛴다.
      if (isValid(nRow, nCol) === false || room[nRow][nCol] === 1) continue;

      // 현재 위치의 방향과 이동할 방향과의 차이
      const dDiff = Math.abs(nDir - dir);

      let candidate;
      if (dDiff === 0) {// 출발 지점에서의 방향과 이동하려는 방향이 같은 경우
        // 직진만 하면 되지만 그러기 위해서는 1로 초기화 되어야 한다.
        candidate = dist[row][col] || 1;
      } else if (dDiff === 2) {
        // 2번 회전해야 하는 경우: 회전 2 + 직진 1
        candidate = dist[row][col] + 3;
      } else {
        // 1번만 회전해도 되는 경우: 회전 1 + 직진 1
        candidate = dist[row][col] + 2;
      }

      if (nRow === dRow && nCol === dCol) {
        // 다음에 도달하는 곳이 목표 지점인 경우
        // 목표 방향까지 고려해서 필요한 동작수를 계산한다.
        const dDiff = Math.abs(nDir - dDir);
        if (dDiff === 0) {
          candidate = candidate;
        } else if (dDiff === 2) {
          candidate = candidate + 2;
        } else {
          candidate = candidate + 1;
        }
      }

      if (candidate < dist[nRow][nCol]) {
        // 유망한 좌표는 큐에 삽입한다.
        enQueue(queue, [nRow, nCol]);
        dist[nRow][nCol] = candidate; // 해당 좌표에 동작수를 넣는다.
        directions[nRow][nCol] = nDir; // 해당 좌표에 방향을 넣는다.
      }
    }
  }

  return dist[dRow][dCol]; // 도착지점에 있는 동작수를 리턴
};


// const robotPath2 = function (room, src, sDir, dst, dDir) {
//   // TODO: 여기에 코드를 작성합니다.
//   let result = [];
//   let startPoint = [...src, sDir];
//   let depth = 0;
//   let move = 0;
//   const direction = [
//     [-1, 0], // 북
//     [0, -1], // 서
//     [1, 0], // 남
//     [0, 1] // 동
//   ];
//   // 바라보는 방향 시계방향으로 북 서 남 동
//   const lookingAt = [1, 4, 3, 2];
//   const vaildCheck = ([x, y]) => {
//     let rowLimit = room.length - 1;
//     let colLimit = room[0].length - 1;
//     if (x > rowLimit || x < 0) return false;
//     if (y > colLimit || y < 0) return false;
//     return true;
//   };

//   const rotate = (start, end) => {
//     // 3, 2, 1, 0 중에 하나
//     // 0이면 회전 없음, 1이면 1회전, 2이면 2회전, 3이면 1회전
//     let temp = Math.abs(start - end);
//     // console.log(temp);
//     return temp === 3 ? 1 : temp;
//   };
//   const dfs = (location, depth, list, move) => {
//     // 무한 루프 방지용
//     // if (result.length !== 0) {
//     //   return;
//     // }
//     if (depth === 50) {
//       return;
//     }
//     // 재귀 종료 조건
//     if (location[0] === dst[0] && location[1] === dst[1]) {
//       console.log(location, move, "목적지에 도착했습니다.");
//       move += rotate(location[2], dDir);
//       result.push(move);
//       return;
//     }
//     let nextLoc = [];
//     let nextList = list.map((el) => el.slice());
//     nextList[location[0]][location[1]] = 1;

//     for (let i = 0; i < direction.length; i++) {
//       // 북 서 남 동 순으로 탐색함
//       let axisX = location[0] + direction[i][0];
//       let axisY = location[1] + direction[i][1];
//       let lDir = lookingAt[i];
//       // console.log([axisX, axisY], vaildCheck([axisX, axisY]));
//       if (vaildCheck([axisX, axisY]) && nextList[axisX][axisY] === 0) {
//         // console.log([axisX, axisY, lDir]);
//         nextLoc.push([axisX, axisY, lDir]);
//       }
//     }
//     if (nextLoc.length === 0) {
//       // console.log(location, move, "막다른 길이네요.");
//       return;
//     }
//     while (nextLoc.length > 0) {
//       let target = nextLoc.shift();
//       // console.log(rotate(location[2], target[2]));
//       let nextMove = move + rotate(location[2], target[2]);
//       // console.log(rotate(location[2], target[2]))
//       if (rotate(location[2], target[2]) === 0) nextMove--;
//       dfs(target, depth + 1, nextList, nextMove + 1);
//     }
//   };
//   dfs(startPoint, depth, room, move);
//   return result;
// };