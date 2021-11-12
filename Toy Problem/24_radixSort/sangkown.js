// radixSort
// 문제
// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 0 이상의 정수
// arr.length 100,000 이하
// 출력
// number 타입을 요소로 갖는 배열을 리턴해야 합니다.
// 배열의 요소는 오름차순으로 정렬되어야 합니다.
// arr[i] <= arr[j] (i < j)
// 주의사항
// 기수 정렬을 구현해야 합니다.
// arr.sort 사용은 금지됩니다.
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// 입출력 예시
// let output = radixSort([3, 1, 21]);
// console.log(output); // --> [1, 3, 21]
// 힌트
// 기수 정렬(radix sort)은 내부적으로 계수 정렬(counting sort)을 사용합니다.
// 계수 정렬을 먼저 학습하고, 어떤 경우에 기수 정렬을 사용하는지 학습하도록 합니다.
// Advanced
// arr[i]의 범위가 정수 전체로 확대될 경우, 기수 정렬 알고리즘을 완성해 보세요.

function radixSort(arr) {
    // todo: 여기에 코드를 작성합니다.
    //계수정렬(counting sort)이란, 숫자를 기준으로 갯수를 세어서 키 값의 위치를 결정 
    // 컴퓨터 과학에서 카운팅 정렬은 작은 양의 정수인 키에 따라 개체 컬렉션을 정렬하는 알고리즘입니다. 
    // 즉, 정수 정렬 알고리즘입니다. 고유 한 키 값을 소유 한 개체 수를 계산하고 해당 개수에 접두사 합계를 적용하여 
    // 출력 시퀀스에서 각 키 값의 위치를 ​​결정하는 방식으로 작동합니다. 출처 위키백과
    // DP 에서 학습했던 거처럼 진행을 하면 안될까?
    // arr에서 maxNum을 구한다.
    // maxNum을 구해서 해당 수만큼 0으로 채워진 배열을 만든다. zeroArr
    // arr를 돌면서, 해당 숫자의 인덱스 부분을 1로 채워준다.
    // zeroArr에서 0이 아닌 요소들을 배열로 만들어서 리턴한다.
    let result = []
    let maxNum = Math.max(...arr)
    let zeroArr = new Array(maxNum + 1).fill(0)
  
    while(arr.length) {
      let current = arr.shift()
      zeroArr[current] += 1
    }
    for( let n = 0; n < zeroArr.length; n++) {
        if(zeroArr[n] !== 0) {
            result.push(n)
        }
    }
    return result; 
    //=> maxNum까지 배열을 만드니깐 실행시간이 초과한다. 그렇다면 객체로 만들어겠습니다.
    // 객체도 똑같이 시간복잡도에 의해서 테스트가 통과 안되었습니다..
}

//Counting sort가 정렬해야되는 숫자 중에 가장 큰 숫자가 커질수록
// 시간복잡도가 무한까지도 갈 수 있는데,
// 이 방법에 대해서 학습하고 추가적으로 작성해보겠습니다.

function getMax(arr) {
    return arr.reduce((max, item) => {
      if (item > max) return item;
      return max;
    }, 0);
  }
  
  function countingSort(arr, radix) {
    const N = arr.length;
    const output = Array(N).fill(0); // 정렬한 요소들을 담을 곳!
    const count = Array(10).fill(0); // 자릿수 별로 누적값을 계산하기 위한 곳!
  
    // 현재 자리수를 기준으로 0~9의 개수를 센다.
    // radix 가 1이면 1의 자릿수만 생각한다. => 아래의 코드를 보게 되면 초기값으로 radix를 1로 진행하고, 돌 때마다 10을 곱해준다!
    // radix가 10이면 10의 자릿수만 생각한다. => 배열 중에 가장 큰 수가 10의 자리이면 두 번 돌기 때문에
    // 처음에는 1의 자릿수로 0 ~ 9까지 만든다. radix가 10이 되면 10의 자릿수로 0 ~ 9까지 만든다.
    // 자릿수 별로 생각을 하기 때문에, count는 0 ~ 9까지만 나온다.
    arr.forEach((item) => {
      const idx = Math.floor(item / radix) % 10;
      count[idx]++;
    });
  
    // count[i]가 i까지의 누적 개수가 되도록 만든다.
    count.reduce((totalNum, num, idx) => {
      count[idx] = totalNum + num;
      return totalNum + num;
    });
  
    // 아래 속성이 유지되도록 하기 위해 배열을 거꾸로 순회한다.
    //  1. 가장 큰 값을 먼저 본다. 자릿수별로 누적값(자릿수 별로 정렬된 배열의 위치)부터 1씩 뺴면서 넣어준다!
    //  2. 가장 큰 값을 가장 뒤에 놓는다.(누적값에 해당하는 부분에 놓는다.) <= 레프런스에 적힌 건데 무슨 말인지 이해가 안되서
    // 아래에 내 말로 적어놈
  
    // 배열을 뒤에서 부터 순회를 해야지, 누적값에 맞춰서 요소들을 놓을 수 있다.
    // 예시) 1의 자리가 8인 수가 3개이고, 누적값이 배열의 마지막일때,
    // 뒤에서부터 3개가 1의 자리가 8인 수가 들어가야 한다.
    // 그렇기 때문에 마지막부터 채우면서 1의 자리가 8인 수들을 넣어간다.
    // 그리고 1회전 때 1의 자릿수로 따지게 되면 7보다 9가 일단의 더 뒤에 가게 된다.
    // 그러면 누적값에서 하나씩 빼면서 들어가기 때문에 10의 자릿수가 0인 애들 중에
    // 가장 먼저 누적값에 들어가야한다.
    let i = N - 1;
    while (i >= 0) {
      const idx = Math.floor(arr[i] / radix) % 10;
      // 70번째 코드로 배열 요소들을 1의 자릿수로 만들었던 걸, 배열의 뒤에서부터 요소들 별로 다시 확인을 한다.
      // count에서 해당 값의 누적값을 찾게 되면, 그게 정렬된 배열에서 위치하는 번호이니깐, output에 넣으려면 1을 빼줘야 한다.
      // 만약에 count[idx]가 3인 수는, 정렬된 배열에서 3번째에 위치를 해야되니깐 인덱스로 보면 2가 된다!
  
      // 최초의 값은 1의 자릿수가 같은 요소들 중에서 <= 이거도 레프런스에 적혀있던 건데 사실 이해가 잘 안된다.
      // count[idx]: 현재 radix의 idx까지 누적 개수
      // count[idx]개만큼 있으므로, 인덱스는 count[idx] - 1
      output[count[idx] - 1] = arr[i];
      count[idx] -= 1;
      i--; 
      // 해당 자릿수의 누적값에서 하나씩 빼게 되면, 해당 수가 들어갈 수 있는 위치를 찾을 수 있다.
      // count에서 7의 누적값이 2인데, 9의 누적값이 5라고 치면,
      // 1의 자릿수가 9인 요소들이 3개라는 말이다. 그래서 1의 자릿수가 9인 수 하나가 5번째 자리에 위치하게 되면
      // 그 다음 1의 자릿수가 9인 수는 4번째 자리, 그 다음 1의 자릿수가 9인 수는 3번째에 위치를 해야한다.
      // 7 7 9 9 9 식으로 정렬이 될 수 있다. 누적값은 배열의 길이랑 같다. 
    }
    // 처음에 입력받은 배열이 [9, 15, 10, 19, 29, 7]이라고 할 때, radix는 1로 먼저 첫번째 자릿수를 대상으로 배열을 정리한다.
    // parseInt(max / radix)은 29로 '> 0' 에 해당한다
    // 1회전 했을 때 나오는 값은 [10, 15, 7, 9, 19, 29] 가 된다. 제일 큰 수의 자릿수는 10의 자릿수기 때문에 한 번 더 돌아야 한다.
    // 1회전을 돌고 나서 radix는 10을 바뀌게 되었고 parseInt(max / radix)는 2가 된다. '> 0'에 해당한다.
    // 1회전에서 1의 자릿수를 확인했으니, 2번째에는 10의 자릿수를 확인한다.
    // 그래서 [7, 9, 10, 15, 19, 29] 순으로 배열이 정리되게 된다.
    // 2회전을 돌면 radix는 100이 되고 parseInt(max / radix)는 0이 되기 때문에 탈출!
    return output;
  }
  
  
  function radixSort(arr) {
    // 음수는 left에 넣으면서 양수로 바꿔준다
    // 양수는 right에 넣는다.
    // 이후에 left는 reverse하고 -1을 곱해줄 거임. 그러고 right를 concat 하면 정렬이 된다.
    let left = [];
    let right = [];
    arr.forEach((item) => {
      if (item >= 0) right.push(item);
      else left.push(item * -1);
    });
  
    let max = getMax(left);
    let radix = 1;
    while (parseInt(max / radix) > 0) {
      left = countingSort(left, radix);
      radix *= 10;
    }
  
    max = getMax(right);
    radix = 1;
    while (parseInt(max / radix) > 0) {
      // 가장 큰 수가 몇 자리 수 인지 여부를 확인한다.
      // 예를 들어서 29라고 치면, radix가 1일때는 parseInt(29 / 1) => 29
      // radix가 10일때는 parseInt(29 / 10) => 2
      // 그리고 한 번 더 돌게 되면은 parseInt(29 / 100) => 0 이기 때문에 radix가 10일 때의 배열로 정해지게 된다.
      right = countingSort(right, radix);
      radix *= 10;
    }
  
    return left
      .reverse()
      .map((item) => item * -1)
      .concat(right);
      // 음수부분은 128번째 줄에서 -1을 곱했기 때문에 
      // 만약에 -11과 -29가 있으면, 
      // 11, 29가 된다
      // 그러고 나서 정렬을 하고
      // reverse로 반전을 시켜놓고
      // -1을 곱해주면 음수가 되고 정렬이 된다! 
  }