// const LIS = function (arr) {
// TODO: 여기에 코드를 작성합니다.
// 정수를 요소로 갖는 문자열을 입력받아 다음의 조건을 만족하는 LIS*의 길이를 리턴해야 합니다.
// LIS: 배열의 연속되지 않는 부분 배열 중 모든 요소가 엄격하게 오름차순으로 정렬된 가장 긴 부분 배열(Longest Increasing Subsequence)
// 배열 [1, 2, 3]의 subseqeunce는 [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] 입니다.
// 엄격한 오름차순: 배열이 동일한 값을 가진 요소없이 오름차순으로 정렬되어 있는 경우를 말합니다.
// Advanced
// LIS를 계산하는 효율적인 알고리즘(O(N^2))이 존재합니다. 쉽지 않기 때문에 바로 레퍼런스 코드를 보고 이해하는 데 집중하시기 바랍니다.
// subsequence는 문자열 또는 배열같이 순서가 있는 데이터에서 순서의 대소 관계가 유지되는 모든 부분 문자열 또는 부분 배열을 의미합니다. sequence가 순서 또는 서열을 의미하기 때문에 subsequence는 부분 서열이라고 부르기도 합니다. 반면 substring 또는 subarray는 연속된 형태의 부분 문자열 또는 부분 배열을 의미합니다. 문자열 'abcd'의 subsequence와 substring은 각각 아래와 같습니다.
// substring: 'a', 'b', 'c', 'd', 'ab', 'bc', 'cd', 'abc', 'bcd', 'abcd'
// subsequence: 'a', 'b', 'c', 'd', 'ab', 'ac', 'ad', 'bc', 'bd', 'cd', 'abc', 'abd', 'acd', 'bcd', 'abcd'
// };
const LIS = function (arr) {
  const N = arr.length;
  // lis[i]는 i에서 끝나는 LIS의 길이를 저장
  // 최소한 각 요소 하나로 LIS를 만들 수 있으므로 1로 초기화한다.

  // arr = [3, 10, 2, 1, 20]
  const lis = Array(N).fill(1);
  // lis = [1, 1, 1, 1, 1]

  for (let i = 1; i < N; i++) {
    // i에서 끝나는 LIS의 길이
    for (let j = 0; j < i; j++) {
      // i 이전의 인덱스만 검사하면 된다.
      // i는 1부터 시작하므로, 짧은 길이부터 검사한다. (bottom-up 방식)
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] += 1;
        // i가 1 ~ 4까지 가는 동안
        // i = 1 => arr[i] = 10이다. 그러면 3보다 더 크기 때문에, LIS는 2개가 된다.
      }
    }
  }
  return Math.max(...lis);
};
// lis는 해당 위치까지의 배열로 잘랐을 때 만들어지는 lis를 나타낸다.
// 그래서 그 자리까지 위치하는 lis에다가 다음 요소가 왔을 때, lis를 충족할 수 있는 지 여부를 확인하고(바로 앞의 요소보다 더 큰지)
// 거기에 1을 더해서 lis의 길이가 만들어지게 된다.
// 이렇게 이해하면 될 거 같다.
  let output = LIS([2, 3]);
console.log(output)