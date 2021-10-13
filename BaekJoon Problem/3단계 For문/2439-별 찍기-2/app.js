// 별 찍기 - 2

// 별을 찍는 문제 2

// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

// 출력
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

// 예제 입력 1
// 5

// 예제 출력 1
//     *
//    **
//   ***
//  ****
// *****

const fs = require("fs");
const inputFile = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input] = fs
  .readFileSync(inputFile)
  .toString()
  .split(" ")
  .map((item) => Number(item));
// let star = new Array(input).fill(" ");
// for (let i = input - 1; i >= 0; i--) {
//   star[i] = "*";
//   console.log(star.join(""));
// }

let star = "";
let blank = "";

for (let i = 1; i <= input; i++) {
  star += "*";
  for (let j = 0; j < input - i; j++) {
    blank += " ";
  }
  console.log(blank + star);
  blank = "";
}
