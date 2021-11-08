// 03_isSubsetOf

// isSubsetOf

// 문제
// 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : base
// number 타입을 요소로 갖는 임의의 배열
// base.length는 100 이하
// 인자 2 : sample
// number 타입을 요소로 갖는 임의의 배열
// sample.length는 100 이하

// 출력
// boolean 타입을 리턴해야 합니다.

// 주의사항
// base, sample 내에 중복되는 요소는 없다고 가정합니다.

// 입출력 예시
// let base = [1, 2, 3, 4, 5];
// let sample = [1, 3];
// let output = isSubsetOf(base, sample);
// console.log(output); // --> true

// sample = [6, 7];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false

// base = [10, 99, 123, 7];
// sample = [11, 100, 99, 123];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false

// Advanced
// 시간 복잡도를 개선하여, Advanced 테스트 케이스(base, sample의 길이가 70,000 이상)를 통과해 보세요.

// 1안
// Advanced 테스트 케이스(base, sample의 길이가 70,000 이상) 통과x
// includes 메소드는 처음 값부터 하나씩 찾으면서 값의 유무를 확인하기 때문에 시간복잡도가  O(n)
const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.

  for (let el of sample) {
    if (base.includes(el)) return true;
  }
  return false;
};

// 2안
// 새로운 배열에 base와 sample 값을 합쳐 그 배열과 base 비교
// Set 객체는 ES6에서 등장한 중복이 허용되지 않는 객체, 중복을 제거한 값들의 집합이다.
// Set 의 prototype 메서드로 keys() 는 존재하지 않고, values() 만 존재
// 시간복잡도  better O(1) > O(log n) > O(n) > O(n log n) > O(n^2) > O(n^3) > O(2^n) worse

const isSubsetOf = function (base, sample) {
  let sumArr = base.concat(sample);
  let setArr = new Set(sumArr);
  let result = [...setArr];

  return result.length === base.length ? true : false;
};

// 3안
// 위와 동일하게 Set 메서드 사용이지만 반복문 사용

const isSubsetOf = function (base, sample) {
  let answer = false;
  const baseSet = new Set(base);

  for (let i = 0; i < sample.length; i++) {
    answer = baseSet.has(sample[i]) ? true : false;
  }
  return answer;
};
