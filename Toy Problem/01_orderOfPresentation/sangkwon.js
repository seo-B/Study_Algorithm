function orderOfPresentation (N, K) {
    // TODO: 여기에 코드를 작성합니다.
    // 멱집합을 활용해서 코드를 만들고 난 다음, 해당 k가 있는 지 여부를 확인한다.
  let result = [];
  let person = [];
  for (let n = 1; n <= N; n++ ) {
    person.push(n)
  }
  let makePresentation = function(arr){
    if(arr.length === N && K.join('') === arr.join('')) {
      return result.length;
    }
    for( let n = 0; n < person.length; n++ ) {
      if(arr.includes(person[n]) !== true) {
        makePresentation(arr.concat(person[n]))
      }
    }
  }
  for ( let j = 0; j < person.length; j++ ) {
    makePresentation([person[j]])
  }
}
// 재귀로 배열을 다 만든 다음에 K와 동일한 배열의 idx를 찾으려고 했으나,
// 많은 수의 배열을 만들다 보니 시간복잡도가 크게 증가하였습니다.
// 추후에 레프런스를 통해서 학습하고 업데이트하도록 하겠습니다.