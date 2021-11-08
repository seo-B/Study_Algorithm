const inequalityNumber = function (signs) {
  // TODO: 여기에 코드를 작성합니다.
  signs = signs.split(" ");
  const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 유효한지 확인하는 함수
  const isValid = function (numArr, signIdx, check, num) {
    // 수를 다 찾았다면 그 값을 리턴
    if (signIdx === signs.length) return parseInt(num.join(""));

    // 아직 못찾았다면
    const currentSign = signs[signIdx];
    // 숫자 하나씩 차례대로 넣어보기
    for (let i = 0; i < numArr.length; i++) {
      const now = numArr[i];
      // 이미 넣은 숫자면 패스
      if (check[now] === true) continue;
      // 첫번째 숫자가 아닐 때, 부등호와 일치하지 않는 숫자도 패스
      if (signIdx >= 0) {
        const prev = num[num.length - 1];
        if (currentSign === "<" && prev >= now) continue;
        if (currentSign === ">" && prev <= now) continue;
      }
      // 만족하는 값이라면 이미 넣은 숫자 체크해주고 재귀로 다음 숫자 넣어보기
      check[now] = true;
      const next = isValid(numArr, signIdx + 1, check, num.concat(now));
      // 이후의 값을 찾을 수 있는지 확인
      if (next !== -1) return next;
      // 이후의 값 찾을 수 없다면 체크 비활성화
      check[now] = false;
    }
    // 넣을 수 있는 값이 없다면
    return -1;
  };

  const minNum = isValid(numArr, -1, Array(10).fill(false), []);
  const maxNum = isValid(numArr.reverse(), -1, Array(10).fill(false), []);
  return maxNum - minNum;
};

// remote test sangkwonkim
