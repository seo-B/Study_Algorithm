// 33_LIS
// LIS
// 문제
// 정수를 요소로 갖는 문자열을 입력받아 다음의 조건을 만족하는 LIS*의 길이를 리턴해야 합니다.

// LIS: 배열의 연속되지 않는 부분 배열 중 모든 요소가 엄격하게 오름차순으로 정렬된 가장 긴 부분 배열(Longest Increasing Subsequence)
// 배열 [1, 2, 3]의 subseqeunce는 [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] 입니다.
// 엄격한 오름차순: 배열이 동일한 값을 가진 요소없이 오름차순으로 정렬되어 있는 경우를 말합니다.
// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr.length는 60,000 이하
// arr[i]는 100,000 이하의 양의 정수
// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// LIS의 길이를 리턴해야 합니다.
// LIS가 존재하지 않는 경우는 없습니다.
// 입출력 예시
// let output = LIS([3, 2]);
// console.log(output); // --> 1 (3 or 2)

// output = LIS([3, 10, 2, 1, 20]);
// console.log(output); // --> 3 (3, 10, 20)
// Advanced
// LIS를 계산하는 효율적인 알고리즘(O(N^2))이 존재합니다. 쉽지 않기 때문에 바로 레퍼런스 코드를 보고 이해하는 데 집중하시기 바랍니다.
// subsequence는 문자열 또는 배열같이 순서가 있는 데이터에서 순서의 대소 관계가 유지되는 모든 부분 문자열 또는 부분 배열을 의미합니다. sequence가 순서 또는 서열을 의미하기 때문에 subsequence는 부분 서열이라고 부르기도 합니다. 반면 substring 또는 subarray는 연속된 형태의 부분 문자열 또는 부분 배열을 의미합니다. 문자열 'abcd'의 subsequence와 substring은 각각 아래와 같습니다.
// substring: 'a', 'b', 'c', 'd', 'ab', 'bc', 'cd', 'abc', 'bcd', 'abcd'
// subsequence: 'a', 'b', 'c', 'd', 'ab', 'ac', 'ad', 'bc', 'bd', 'cd', 'abc', 'abd', 'acd', 'bcd', 'abcd'
// LIS의 길이 대신 LIS 자체를 리턴하는 함수를 구현해 보시기 바랍니다.

// 최장증가수열 (Longest Increasing Subsequence)
// 각 항목들의 가장 긴 부분집합을 찾는 알고리즘 Lower bound 와 dp 두가지 방법 존재 일반적으로 DP를 이용
// 어떤 수열에서 특정 부분을 지워서 만들어낼 수 있는 증가수열 중 가장 긴 수열
// dp는 O(N^2) 시간 복잡도
// lts[i] = arr[i]를 마지막 값으로 가지는 가장 긴 증가부분수열의 길이
const LIS = function (arr) {
  const N = arr.length;
  const lis = Array(N).fill(1);
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        // arr[i] > arr[j] i 이전의 값이 현재 i보다 작은지 확인 - LIS 알고리즘이 항상 증가하는 수열이기 때문에 필수 조건
        // lis[j] + 1 > lis[i] j번째 원소를 마지막에 갖는 최대증가수열이 lis[j]인데 마지막 i값을 끝에 추가했을때
        // 현재까지의 최대값보다 커야하므로 필요
        lis[i] = lis[j] + 1;
      }
    }
  }
  return Math.max(...lis); /*?.*/
};
let output = LIS([3, 10, 2, 1, 20]);
console.log(output);

// lower bound 정렬된 배열에서 찾고자 하는 값 이상이 처음으로 나타나는 위치
// 이진탐색으로 구현(O(logN))
// 3 10 2 1 20 일때  8의 lower bound는 10이 된다
// i = 0 일 때 3
// i = 1 일 때 3 10
// i = 2 일 때 arr[2]가 2이고 2의 lower bound는 3이 있는 자리기 때문에 3자리에 2가 들어간다 . 2 10
// i = 3 일 때 arr[3]은 1이고 1의 lower bound는 2가 있는 자리기 때문에 2자리에 1이 들어간다. 1 10
// i = 4 일 때 arr[4]는 20이고 20이 가장 큰 수이므로 lower bound는 없다 마지막에 추가해주면 1 10 40
