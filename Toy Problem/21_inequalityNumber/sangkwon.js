const inequalityNumber = function (signs) {
    //   // maxNum과 minNum을 구한다.
    //   // maxNum은 부등호가 > 일때, 제일 처음에 98가 들어온다 && < 일 때, 89가 들어온다.
    //   // minNum은 부동호가 > 일때, 10이 들어온다. < 일때 01이 들어온다.
    //   // 먼저 signs를 split(' ')로 만들어서 배열로 만든다.
    //   // 배열에서 하나씩 빼면서 진행을 한다.
    //   // maxNum과 minNum은 함수로 만든다
    const getMaxNumber = (signs, numArr) => {
      let max = '';
      for ( let n = 0; n < signs.length; n++ ) {
        if(signs[n] === '>') {
          max += String(numArr.pop())
        }
        else {
          let count = 1;
          for ( let i = n + 1; i < signs.length; i++ ) {
            if ( signs[i] === '<' ) {
              count++
            } else break;
          }
          max += String(numArr.splice(numArr.length - 1 - count, 1))
        }
      }
      max += numArr.pop()
      return max
    }
    
    const getMinNumber = (signs, numTable) => {
      let min = '';
      for (let i = 0; i < signs.length; i++) {
        if (signs[i] === '<') {
          min += String(numTable.shift())
        } else {
          let count = 1;
          for (let j = i + 1; j < signs.length; j++) {
            if (signs[j] === '>') count++
            else break
          }
          min += String(numTable.splice(count, 1))
        }
      }
      min += numTable.shift()
      return min
    }
    
      signs = signs.split(' ')
      let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const answer = getMaxNumber(signs, number.slice()) - getMinNumber(signs, number.slice())
      return answer
    }