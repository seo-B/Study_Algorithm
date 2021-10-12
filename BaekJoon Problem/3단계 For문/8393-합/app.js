// 합

// 1부터 N까지의 합을 구하는 문제. 물론 반복문 없이 풀 수도 있습니다

// 문제
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

// 출력
// 1부터 n까지 합을 출력한다.

// 예제 입력 1
// 3
// 예제 출력 1
// 6

const fs = require("fs");
const inputFile = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(inputFile)
  .toString()
  .split(" ")
  .map((item) => parseInt(item));
let sum = 0;
for (let i = 1; i <= input; i++) {
  sum += i;
}
console.log(sum);
