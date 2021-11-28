function largestRectangularArea(histogram) {
    // Write your code here
    // 앞 빌딩이 나보다 같거나 큰 경우 앞에도 확인
    // 단, 인덱스가 0인 경우는 뒤에만 확인
    // 뒷 빌딩이 나보다 같거나 큰 경우 뒤에도 확인
    // 단, 마지막 인덱스인 경우는 앞에만 확인
  const array = histogram.slice();
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    const point = array[i];
    let count = 1; // 나는 무조건 포함
    // 앞에도 확인
    if ( 0 < i && array[i - 1] >= point) {
      let j = i - 1;
      while (j >= 0 && array[j] >= point) {
        count++;
        j -= 1;
      }
    }
    // 뒤에도 확인
    if (i < array.length - 1 && array[i + 1] >= point) {
      let j = i + 1;
      while (j < array.length && array[j] >= point) {
        count++;
        j += 1;
      }
    }

    if (max < point * count) {
      max = point * count;
    }
  }

  return max;
}