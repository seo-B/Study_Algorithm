const spiralTraversal = function (matrix) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';
    return cycle(matrix, result)
  };
  const cycle = function(matrix, result) {
    if(matrix.length === 0) {
      return result; // 탈출 조건
    }
    let x = matrix[0].length;
    let y = matrix.length;
  
    if ( y === 1) {
      for( let n = 0; n < x; n++ ) {
        result += matrix[0][n]
      }
    }
    if ( y > 1 ) {
      for (let n = 1; n < 5; n++ ) { // 4가지의 방법으로 문제를 해결한다.
        if( n === 1) {
          for ( let j = 0; j < x; j++ ) {
            result += matrix[0][j]
          }
        }
        if ( n === 2) {
          for (let j = 1; j < y - 1; j++ ) {
            result += matrix[j][x - 1]
          }
        }
        if ( n === 3 ) {
          for ( let j = x - 1; j > 0; j-- ) {
          result += matrix[y - 1][j]
          }
        }
        if ( n === 4 ) {
          for ( let j = y - 1; j > 0; j-- ) {
            result += matrix[j][0]
          }
        }
      }
    }
    let copied = [];
    for ( let i = 1; i < y - 1; i++ ) {
      copied.push(matrix[i].slice(1, -1))
    }
    return cycle(copied, result)
  } 
  