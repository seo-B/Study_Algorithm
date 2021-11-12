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