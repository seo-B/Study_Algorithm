// A-B

// 두 수를 입력받고 뺄셈을 한 결과를 출력하는 문제

// 문제
// 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 첫째 줄에 A-B를 출력한다.

// 예제 입력 1 
// 3 2
// 예제 출력 1 
// 1문제
// 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 첫째 줄에 A-B를 출력한다.

// 예제 입력 1 
// 3 2

// 예제 출력 1 
// 1

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = require('fs').readFileSync(filePath).toString().split(' ').map(item => parseInt(item));
console.log(A - B);


// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');
//   input = input[0];
//   input = input.split(' ').map((item) => parseInt(item));

// solution(input[0], input[1]);

// function solution(A, B) {
//   console.log(A - B);
// }