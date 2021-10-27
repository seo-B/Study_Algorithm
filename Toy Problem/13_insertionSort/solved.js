// 13_insertionSort

// insertionSort

// 문제
// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 정수
// arr.length는 1,000 이하

// 출력
// number 타입을 요소로 갖는 배열을 리턴해야 합니다.
// 배열의 요소는 오름차순으로 정렬되어야 합니다.
// arr[i] <= arr[j] (i < j)

// 주의사항
// 삽입 정렬을 구현해야 합니다.
// arr.sort 사용은 금지됩니다.
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

// 입출력 예시
// let output = insertionSort([3, 1, 21]);
// console.log(output); // --> [1, 3, 21]

// Advanced
// insertionSort 함수의 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬해 보세요.

//12/12

const insertionSort = function (arr, callback = (value) => value) {
  // TODO: 여기에 코드를 작성합니다.

  for (let i = 0; i < arr.length; i++) {
    let isSorted = true;

    arr.forEach((el, idx, arr) => {
      if (callback(arr[idx]) > callback(arr[idx + 1])) {
        let temp = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp;
        isSorted = false;
      }
    });

    if (isSorted) return arr;
  }
  return arr;
};

// const insertionSort = function (arr, callback = (value) => value) {
//   while (true){
//     let isSort = 0

//     for (let i = 1; i < arr.length; i++){
//       if(callback(arr[i-1]) > callback(arr[i])) {
//         const temp = arr[i]
//         arr[i] =  arr[i-1]
//         arr[i-1] = temp
//       }
//       else isSort += 1
//     }

//     if(isSort === arr.length - 1) return arr
//   }
// };
