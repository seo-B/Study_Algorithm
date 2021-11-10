// 23_spiralTraversal
// spiralTraversal
// 문제
// 2차원 M x N 배열을 나선형(spiral)으로 순회해야 합니다.

// 입력
// 인자 1 : matrix
// 세로 길이(matrix.length)가 M, 가로 길이(matrix[i].length)가 N인 2차원 배열
// matrix[i]는 string 타입을 요소로 갖는 배열
// matrix[i][j].length는 1
// 출력
// string 타입을 리턴해야 합니다.
// 주의사항
// 순회는 좌측 상단 (0,0)에서 시작합니다.
// 배열의 모든 요소를 순서대로 이어붙인 문자열을 리턴해야 합니다.
// 입출력 예시
// let matrix = [
//   ['A', 'B', 'C'],
//   ['D', 'E', 'F'],
//   ['G', 'H', 'I'],
// ];
// let output = spiralTraversal(matrix);
// console.log(output); // --> 'ABCFIHGDE'

// matrix = [
//   ['T', 'y', 'r', 'i'],
//   ['i', 's', 't', 'o'],
//   ['n', 'r', 'e', 'n'],
//   ['n', 'a', 'L', ' '],
// ];
// output = spiralTraversal(matrix);
// console.log(output); // --> 'Tyrion Lannist

const spiralTraversal = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
  let result = "";
  let start = 0;
  let end = matrix[0].length - 1;
  let startRow = 0;
  let endRow = matrix.length - 1;

  while (start <= end && startRow <= endRow) {
    for (let i = start; i <= end; i++) {
      result = result + matrix[startRow][i];
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      result = result + matrix[i][end];
    }
    end--;

    for (let i = end; i >= start; i--) {
      result = result + matrix[endRow][i];
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      result = result + matrix[i][start];
    }
    start++;
  }


  return result;
};
