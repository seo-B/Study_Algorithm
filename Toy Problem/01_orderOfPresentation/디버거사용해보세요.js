function orderOfPresentation(N, K) {
  const factorial = (n) => {
    if (n < 2) return 1;
    return n * factorial(n - 1);
  };

  let arr = [...new Array(N).keys()].map((i) => i + 1);
  console.log("원본 arr : ", arr);

  let result = 0;

  for (let i = 0; i < K.length; i++) {
    let num = K[i];
    console.log("i : ", i);
    debugger;

    arr = arr.filter((n) => n !== num);
    console.log("num(발표 순서의 숫자) : ", num);
    console.log("arr(사용하지 않은 숫자들) : ", arr);
    debugger;

    let candidate = arr.filter((n) => n < num).length;
    console.log("num(발표 순서의 숫자) : ", num);
    console.log("cadidate(num 이전의 같은 모양의 경우의 가지수) : ", candidate);
    debugger;

    result += factorial(arr.length) * candidate;
    console.log("arr(사용하지 않은 숫자들) : ", arr);
    console.log("result : ", result);
    debugger;
  }

  return result;
}

let output = orderOfPresentation(4, [4, 1, 2, 3]);
console.log(output);
