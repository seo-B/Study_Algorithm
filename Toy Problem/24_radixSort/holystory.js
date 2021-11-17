function radixSort(arr) {  
    const maxDigits = mostDigits(arr); //[3, 1, 21, -4, -2] 2
    
    for(let k = 0; k < maxDigits; k++) { // 0 ~ 1
      // let digitBuckets = Array.from({length:10}, () => []);
      let positive = Array.from( {length: 10}, () => []);
      let negative = Array.from( {length: 10}, () => []);
  
      for(let i = 0; i < arr.length; i++) {
        let digit = getDigit(arr[i], k)
        if(arr[i] > 0) { //양수일 때
          positive[digit].push(arr[i])
        } else { //음수일 때
          negative[9 - digit].push(arr[i])
        }
      }
      arr = [].concat(...negative, ...positive);
    }
    return arr;
  }
  
  function getDigit(num, i) { //각 자리의 숫자에 해당하는 숫자 확인
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
  }//9682 / 10  =  Math.floor(968.2) = 968 % 10 === 8
  
  function digitCount(num) { // 숫자의 자릿수 반환 digitCount(1); //1, digitCount(25); // 2
    return num.toString().length;
  }
  
  function mostDigits(nums) { //배열 내에서 자릿수가 가장 긴 숫자의 길이
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }