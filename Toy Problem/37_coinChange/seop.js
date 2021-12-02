// 37_coinChange
// coinChange
// 문제
// 다양한 동전들을 가지고 특정 금액을 만들 수 있는 모든 경우의 수를 리턴해야 합니다.

// 예를 들어, 100원, 500원짜리 동전을 가지고 1,000원을 만들 수 있는 방법은 총 3가지 입니다.
// 100원 10개, 100원 5개 + 500원 1개, 500원 2개
// 입력
// 인자 1 : total
// number 타입의 이하의 자연수
// 인자 2 : coins
// number 타입을 요소로 갖는 배열
// coins.length는 10,000 이하
// coins[i]는 20 이하의 양의 정수
// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// 동전의 금액은 다양하게 주어집니다.
// coins는 오름차순으로 정렬되어 있습니다.
// 각 동전의 개수는 무수히 많다고 가정합니다.
// 입출력 예시
// let total = 10;
// let coins = [1, 5];
// let output = coinChange(total, coins);
// console.log(output); // --> 3

// total = 4;
// coins = [1, 2, 3];
// output = coinChange(total, coins);
// console.log(output); // --> 4 ([1, 1, 1, 1], [1, 1, 2], [2, 2], [1, 3])
// Advanaced
// coinChange를 계산하는 효율적인 알고리즘(O(M * N))이 존재합니다(total과 coins.length가 N, M일 경우). 쉽지 않기 때문에 바로 레퍼런스 코드를 보고 이해하는 데 집중하시기 바랍니다.

// 알고리즘  O(M * N) ref code
// 아직 완벽히 이해 하지 못함 다시 표 그리면서 이해 하기!
const coinChange = function (total, coins) {
  // memo[i][j]는 i만큼의 금액을 coins[j]부터 ~ coins[coins.length - 1]까지 사용하여 만들 수 있는 경우의 수를 저장
  const memo = [];
  for (let i = 0; i < total + 1; i++) memo.push(Array(coins.length).fill(-1));
  const makeChageFrom = (left, idx) => {
    // 0을 만드는 방법은 1가지이다. 아니면 목표 금액을 만들었다고 생각해도 된다.
    if (left === 0) return 1;
    // 금액이 마이너스가 되는 경우는 불가능하므로 0을 리턴
    if (left < 0) return 0;
    // 동전을 전부 검토해서, 남아있는 새로운 동전은 없는데 목표 금액을 만들지 못한 경우 (실패)
    if (idx >= coins.length && left > 0) return 0;
    // 이미 해결한 적이 있는 문제는 다시 풀지 않는다.
    if (memo[left][idx] !== -1) return memo[left][idx];

    // left만큼의 금액을 coins[idx]부터 사용하여 만들 수 있는 경우의 수는
    //  1) coins[idx]는 그만 사용하고, 다음 동전으로 넘어가거나 (목표 금액은 그대로이고, idx가 증가한다.)
    //  2)) coins[idx]를 한번 더 사용한다. coins[idx]를 또 사용할 수 있으므로, idx는 그대로이고, 목표 금액은 coins[i]만큼 줄어든다.
    memo[left][idx] =
      makeChageFrom(left, idx + 1) + makeChageFrom(left - coins[idx], idx);
    return memo[left][idx];
  };

  return makeChageFrom(total, 0);
};
