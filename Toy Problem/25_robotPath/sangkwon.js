// robotPath
// 문제
// 세로와 가로의 길이가 각각 M, N인 방의 지도가 2차원 배열로 주어졌을 때, 1은 장애물을 의미하고 0 이동이 가능한 통로를 의미합니다. 
// 로봇은 지도 위를 일분에 한 칸씩 상하좌우로 이동할 수 있습니다. 로봇의 위치와 목표 지점이 함께 주어질 경우, 로봇이 목표 지점까지 
// 도달하는 데 걸리는 최소 시간을 리턴해야 합니다.

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

// const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  // 상 하 좌 우에 해당하는 움직임을 배열로 만든다
  // 출발지부터 시작해서 => 상 하 좌 우 배열을 돈다
  // undefined일 경우 return;
  // undefined가 아닐 경우 count 1
  // 제일 먼저 도착을 하는 게 있으면 바로 리턴한다.

//   let result = [];
//   let X = room.length
//   let Y = room[0].length

//   let srcArr = [[src[0]],[src[1]]]
//   let makeDst = function(src, num, arr) {
//     if(arr.length > 0) {
//       return num
//     }
//   }
// };

const robotPath = function (room, src, dst) {
  const aux = (M, N, candi, step) => {
    const [row, col] = candi;// 구조분해 할당으로 변수에 값을 할당한다.
    if (row < 0 || row >= M || col < 0 || col >= N) return;  // M, N은 각각 열의 길이, 행의 길이를 의미한다.
    if (room[row][col] === 0 || room[row][col] > step) {
      // 0 일 경우에는, 갈 수 있는 길이라는 뜻이며,
      // step 보다 room[row][col] 값이 큰 경우는, 해당 위치로 오는데
      // 지금 가는 길 보다 더 돌아서 오는 길이기 때문에
      // 최소의 움직임으로 갈 수 있는 수를 찾기 위해서 step으로 바꿔준다.
      room[row][col] = step;
    } else {
      // 1일 경우는 가지 못하는 길이기 때문에 탈출
      // room[row][col] 이 더 작다면, 해당 방법은 그 위치로 가는데에
      // 기존의 방법보다 더 돌아가는 방법이기 때문에 탈출
      return;
    }
    aux(M, N, [row + 1, col], step + 1); // 상
    aux(M, N, [row - 1, col], step + 1); // 하
    aux(M, N, [row, col - 1], step + 1); // 좌
    aux(M, N, [row, col + 1], step + 1); // 우
  };

  aux(room.length, room[0].length, src, 1);

  const [r, c] = dst;
  return room[r][c] - 1; // step이 1부터 시작을 했기 때문에 1을 빼줘야 한다.
};
