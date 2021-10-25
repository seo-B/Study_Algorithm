// 2562-최댓값

// 최댓값이 어디에 있는지 찾는 문제

// 문제
// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

// 예를 들어, 서로 다른 9개의 자연수

// 3, 29, 38, 12, 57, 74, 40, 85, 61

// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

// 입력
// 첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

// 출력
// 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

// 예제 입력 1
// 3
// 29
// 38
// 12
// 57
// 74
// 40
// 85
// 61

// 예제 출력 1
// 85
// 8

const fs = require("fs");
const inputFile = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(inputFile)
  .toString()
  .split("\n")
  .map((n) => Number(n));

// sort 기본값 변경 number값에 input.sort() 해주는 순간 input 배열값이 변경됨 주의!! 틀린이유
// let number = input.sort((a, b) => a - b);
// let max = number[number.length - 1];
// let inxNum = input.indexOf(max);
// console.log(typeof max, input);
// console.log(`${max}\n${inxNum}`);

let max = input[0];
let idxNum = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    idxNum = i;
  }
}

console.log(max);
console.log(idxNum + 1);

// let max = Math.max(...input);

// console.log(max);
// console.log(input.indexOf(max) + 1);
