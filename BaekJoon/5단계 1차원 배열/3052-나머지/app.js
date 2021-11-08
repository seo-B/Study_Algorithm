// 3052-나머지

// 위와 비슷한 문제(2577)

// 문제
// 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.

// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.

// 출력
// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

// 예제 입력 1
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// 예제 출력 1
// 10

// 각 수를 42로 나눈 나머지는 1, 2, 3, 4, 5, 6, 7, 8, 9, 10이다.

// 예제 입력 2
// 42
// 84
// 252
// 420
// 840
// 126
// 42
// 84
// 420
// 126

// 예제 출력 2
// 1

// 모든 수를 42로 나눈 나머지는 0이다.

// 예제 입력 3
// 39
// 40
// 41
// 42
// 43
// 44
// 82
// 83
// 84
// 85

// 예제 출력 3
// 6

// 각 수를 42로 나눈 나머지는 39, 40, 41, 0, 1, 2, 40, 41, 0, 1이다. 서로 다른 값은 6개가 있다.

const fs = require("fs");
const inputFile = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(inputFile)
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));
let result = input.map((num) => num % 42);
let [...answer] = new Set(result);

console.log(answer.length);

// 처음 작성 코드 -> 반복문 사용으로 push값 넣어주는 것보다 map으로 변경 가능
// let result = [];
// for (let i = 0; i < input.length; i++) {
//   result.push(input[i] % 42);
// }
// let [...answer] = new Set(result);

// 배열 값 중복 제거
// 1 Set 객체 사용 - 부분집합 교집합 등에 주로 사용

// 2 forEach() 와 includes() 사용 기존 배열에 없는 값만 새로운 배열에 추가
// const result = [];
// input.forEach(n => {
//      const num = n % 42;
//     if (result.indexOf(num) === -1) {
//         result.push(num);
//     }
// });
// console.log(result.length);

// 3 filter() 와 indexOf() 활용하여 기존 배열에 없는 요소만 새로운 배열에 추가해서 중복 없는 배열을 만드는 방법.
// 2번과 비슷
