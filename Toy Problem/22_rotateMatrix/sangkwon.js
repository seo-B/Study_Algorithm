// rotateMatrix

// 문제
// 2차원 N x N 배열을 시계 방향으로 90도 회전시킨 배열을 리턴해야 합니다.

// 입력
// 인자 1 : matrix
// 가로 길이(matrix[i].length)와 세로 길이(matrix.length)가 모두 N인 2차원 배열
// matrix[i][j]는 number 타입

// 출력
// 2차원 배열을 리턴해야 합니다.

// 입출력 예시

// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// console.log(matrix[0][0]); // --> 1
// console.log(matrix[3][2]); // --> 15

// const rotatedMatrix = rotateMatrix(matrix);
// console.log(rotatedMatrix[0][0]); // --> 13
// console.log(rotatedMatrix[3][2]); // --> 8

// 힌트

// 컴퓨터 과학에서 행렬은 '행'의 길이인 m과 '열'의 길이인 n의 곱으로 표현됩니다. m X n 행렬은 아래와 같이 2차원 배열로 구현할 수 있습니다. (행렬의 요소를 전부 initVal로 초기화)

// const matrix = [];

// for(let row = 0; row < m; row++>) {
//   matrix.push(Array(n).fill(initVal))
// }

// 이때 matrix[i][j]는 '행(세로축)을 기준으로 i만큼 아래에 있고 열(가로축)을 기준으로 j만큼 옆에 있다.`를 뜻합니다. 이 방식은 기하학에서 좌표 평면 위의 한 점을 나타낼 때 (x, y), 즉 가로축을 먼저 표기하고 세로축을 다음에 표기하는 방식과는 다릅니다. 그래프를 인접행렬로 구현할 때, 이 점을 주의하셔야 합니다.

// Advanced
// 세로와 가로의 길이가 각각 M, N인 2차원 M X N 배열을 시계방향으로 90도씩 K번 회전시킨 배열을 리턴해 보세요. 회전수가 두 번째 입력으로 주어집니다.

const rotateMatrix = function (matrix, rotation) {
    // TODO: 여기에 코드를 작성합니다.
    // 2차원 N x N 배열을 시계 방향으로 90도 회전시킨 배열을 리턴해야 합니다.
    // 2차원 배열을 리턴해야 합니다.
  
    // 90도로 회전시키면 각 행의 0번째 요소가 0번째 행의 요소들이 된다.
    // 각 행의 1번째 요소가 1번째 행의 요소들이 된다.
    // 행의 길이만큼 반복문을 돌려서 집어넣어준다.
    if ( matrix.length === 0 ) {
      return [];
    }
    let newMatrix = [];
    let count = 1;
    for ( let n = 0; n < matrix[0].length; n++ ) {
      let result = [];
      for ( let j = 0; j < matrix.length; j++ ) {
        result.unshift(matrix[j][n])
      }
      newMatrix.push(result)
      result = [];
    }
  if ( rotation === undefined || rotation === count ) {
    return newMatrix
  }
  else {
    return rotateMatrix(newMatrix, rotation - 1)
  }
};