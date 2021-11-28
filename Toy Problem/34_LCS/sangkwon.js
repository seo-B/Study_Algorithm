// dynamic programming: O(M * N)
// tabulation(테이블에 정리)을 활용해 bottom-up 방식으로 해결

// https://st-lab.tistory.com/139
const LCS = function (str1, str2) {
    const M = str1.length;
    const N = str2.length;
    // table[i][j]는 str1.slice(0, i)와 str2.slice(0, j)의 LCS를 저장
    // str1.slice(0, i)는 0부터 i 바로 직전까지를 의미함 (i까지가 아님에 주의)
    const table = [];
    for (let i = 0; i < M + 1; i++) table.push(Array(N + 1).fill(-1));
  
  // table = [ -> str2의 길이
  //        a   c   e   b
  //   [-1, -1, -1, -1, -1],
  // a [-1, -1, -1, -1, -1],
  // b [-1, -1, -1, -1, -1],
  // c [-1, -1, -1, -1, -1],
  // d [-1, -1, -1, -1, -1]
  //]
  
    for (let i = 0; i <= M; i++) { // 테이블의 각 행을 표현한다.
      for (let j = 0; j <= N; j++) { // 테이블의 각 열을 표현한다.
        if (i === 0 || j === 0) {
          // 테이블 상에서 i 또는 j가 0인 경우, 한쪽 문자열이 길이가 0이라는 의미이다.
          // LCS가 존재할 수 없으므로, 0을 저장한다.
          // table 0번째 행이 전부다 0으로 채워진다
          // table 각 행의 0번째 요소가 0으로 채워진다.
          table[i][j] = 0;
        } else if (str1[i - 1] === str2[j - 1]) {
          // 테이블 상에 0이 포함되어 있으니깐, -1을 해줘야지, str1, str2 상에서 문자의 위치가 나오게 된다.
          // 두 문자가 같은 경우
          // 양쪽 문자열의 인덱스가 한 개씩 이전인 상태에서 만들 수 있는 LCS의 길이보다 1만큼 더 길다.
          // => 테이블 상에서 해당 위치의 좌측 상향의 대각선에 위치한 값보다 1이 크다.
          table[i][j] = 1 + table[i - 1][j - 1];
        } else {
          // 두 문자가 같지 않은 경우
          // 둘 중 한쪽을 포기하는 경우에 만들 수 있는 LCS의 길이를 따른다.
          table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);

        }
      }
    }
    return table[M][N];
  };
  // 최종적으로 만들어지는 table의 모양
  // [
  //   [ 0, 0, 0, 0, 0 ],
  //   [ 0, 1, 1, 1, 1 ],
  //   [ 0, 1, 1, 1, 2 ],
  //   [ 0, 1, 2, 2, 2 ],
  //   [ 0, 1, 2, 2, 2 ]
  // ]