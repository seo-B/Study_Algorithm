// 곱셈

// 빈 칸에 들어갈 수는?

// 문제
// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

//        472 ----- (1)
//      x 385 ----- (2)
// ----------
//       2360 ----- (3)
//      3776  ----- (4)
//     1416   ----- (5)
// ----------
//     181720 ----- (6)       


// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

// 출력
// 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

// 예제 입력 1 
// 472
// 385

// 예제 출력 1 
// 2360
// 3776
// 1416
// 181720

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(item => parseInt(item));
let A = input[0];
let B = input[1];

let units = B % 10;
let tens = Math.floor((B % 100)/10);
let hundreds = Math.floor(B / 100);

console.log(A * units);
console.log(A * tens);
console.log(A * hundreds);
console.log(A * B);