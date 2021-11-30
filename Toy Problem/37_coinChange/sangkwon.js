const coinChange = function (total, coins) {
    // TODO: 여기에 코드를 작성합니다.
    // 앞 서 배웠던 dp를 이용해 본다.
    // 먼저 total 금액까지 갈 수 있는 배열을 하나 만들어준다.
    // 그리고 이 배열의 인덱스가 각 동전보다 클 경우에,
    // 동전으로 해당 total 을 만들 수 있는 방법은
    // total - 동전 = 금액을 만드는 총 경우의 수와 동일하다.    
    let target = [1]
    for ( let n = 1; n <= total; n++ ) {
      target[n] = 0
    }
    // console.log(target)
    // return target
    // target = new Array(total + 1).fill(0)
    // target을 0으로 다 만들어줬다
    for ( let j = 0; j < coins.length; j++ ) {
      for ( let n = 1; n <= total; n++ ) {
        if( coins[j] <= n ) {
          target[n] += target[n - coins[j]]
        }
      }
    }
    return target[total]
  };

  let total = 10;
let coins = [1, 5];
let output = coinChange(total, coins);
console.log(output); 