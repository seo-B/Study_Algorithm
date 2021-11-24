function orderOfPresentation(N, K) {
  // 조의 개수 N, 발표 순서 K
  // factorial 값을 구하는 함수 || 재귀 or 반복문 이용할 함수
  const factorial = (n) => {
    if (n < 2) return 1;
    return n * factorial(n - 1);
  };
  // N개의 순서 배열 생성 new Array(N) === n개의 undefinded 배열
  // Array.keys로 index 값이 생성된 배열로 만들어 주고
  // N개의 1부터 시작하는 배열 -> map 0부터 시작을 1부터 시작으로 바꿔줌

  let arr = []
  for ( let n = 1; n <= N; n++ ) {
    arr.push(n)
  }

  // 발표 순서를 담는 변수 result, 0으로 초기화 하고 최종적으로 출력할 변수
  let result = 0;
  // 발표 순서 K의 길이만큼 반복문을 실행
  for (let i = 0; i < K.length; i++) {
    // K의 i번째 조를 담는 변수 num
    let num = K[i];
    // candidate 1xxx 2xxx 3xxx 3개 반복을 구해주는 코드
    // n !== num인 이유는 4123인 경우 4이전의 경우의 수를 구하기 위해
    // ref코드 N-i-1으로 (n-1)! (n-2)! (n-3)! 이런식으로 진행되게 함
    // ref (n-i)!가 아닌 이유는 idx 0부터 시작으로 (n-0)!이 되면 안되기에 -1
    arr = arr.filter((n) => n !== num); // num 이 아닌 애들로 배열을 만든다.

    // cadidate를 구해야 3! x candidate
    let candidate = arr.filter((n) => n < num).length; // num 보다 작은 수의 배열을 만들어서 길이를 구한다.

    result += factorial(arr.length) * candidate;
  }

  return result;
}
