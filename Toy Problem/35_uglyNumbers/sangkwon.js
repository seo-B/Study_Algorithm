const uglyNumbers = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    // 각 수에 다가 2 3 5를 곱하면 ugly number 가 만들어진다.
    // 1부터 2, 3, 5를 곱해줄 때, 곱해진 숫자가 숫자에 따라서 위치가 정해지지는 않을까?
    // 아닌 거 같다.. 
    // 해당 패턴을 찾아서 해결을 하면 좋을 거 같은데 일단은 조금 더 알아봐야겠습니다.
    // 해당 숫자가 ugly num인지 여부 확인은 쉬운데
    // 패턴을 찾아서 진행하기는 어려운 듯 하다..
    let uglyNumArr = [1]
    let idx2 = 0,
    idx3 = 0,
    idx5 = 0
    // uglyNum을 만들어줄 인덱스를 정한다. idx마다 곱해질 숫자가 뒤에 숫자이다.
  
    for (let i = 0; i < n; i++ ) {
      // 인덱스에다가 2, 3, 5를 곱해서, 그 중 가장 작은 수는 배열에 추가를 한다.
      // 배열에 추가된 숫자에게 곱해졌던 수는 해당 인덱스에서 다시 구하지 않아도 되며, 배열에 추가된 숫자를
      //  uglyNum으로 만들어주기 위해 해당 인덱스에 1을 더해준다
      let mutipleByidx2 = uglyNumArr[idx2] * 2
      let mutipleByidx3 = uglyNumArr[idx3] * 3
      let mutipleByidx5 = uglyNumArr[idx5] * 5
  
      let minUgly = Math.min(
        mutipleByidx2, mutipleByidx3, mutipleByidx5
      )
      uglyNumArr.push(minUgly)
  
      if(minUgly === mutipleByidx2) idx2++
      if(minUgly === mutipleByidx3) idx3++
      if(minUgly === mutipleByidx5) idx5++
    }
    return uglyNumArr[n - 1]
  };