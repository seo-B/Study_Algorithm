// 14_rotatedArraySearch

// rotatedArraySearch
// 문제
// 부분적으로 오름차순 정렬*된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.

// 부분적으로 정렬된 배열: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
// 예시: [4, 5, 6, 0, 1, 2, 3]은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬됩니다.
// 입력
// 인자 1 : rotated
// number 타입을 요소로 갖는 배열
// rotated[i]는 정수
// 인자 2 : target
// number 타입의 정수
// 출력
// number 타입을 리턴해야 합니다.

// 주의사항
// rotated에 중복된 요소는 없습니다.
// target이 없는 경우, -1을 리턴해야 합니다.

// 입출력 예시
// let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
// console.log(output); // --> 5

// output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
// console.log(output); // --> -1

// Advanced
// 단순히 처음부터 끝까지 찾아보는 방법(O(N)) 대신 다른 방법(O(logN))을 탐구해 보세요.

// 힌트
// 이진 탐색(binary search)을 약간 변형하여 해결합니다.

// 6/6

const rotatedArraySearch = function (rotated, target) {
  let left = 0,
    right = rotated.length - 1;

  while (left <= right) {
    // 탈출 조건
    let middle = parseInt((right + left) / 2); // 배열의 중간 인텍스를 찾는다.

    if (rotated[middle] === target) {
      // 중간 요소가 타겟이랑 같으면 인덱스를 리턴한다
      return middle;
    }
    // 그렇지 않다면
    if (rotated[left] < rotated[middle]) {
      // 중간 요소가 맨 앞의 요소보다 크다면
      // 왼쪽 절반이 정렬되어 있는 상태
      if (target < rotated[middle] && rotated[left] <= target) {
        // 타겟이 미들보다 작고, 타겟이 앞의 요소보다 크다면,
        right = middle - 1; // 왼쪽과 가운데 사이에 타겟이 있기 때문에 오른쪽을 가운데 보다 하나 앞으로 옮긴다. 왼쪽은 그대로 0번째
      } else {
        left = middle + 1; // 그게 아니라면 왼쪽을 미들 + 1 로 만들어 준다. 오른쪽은 그대로 마지막 요소
      }
    } else {
      // 오른쪽 절반이 정렬되어 있는 상태
      if (target <= rotated[right] && rotated[middle] < target) {
        // 미들의 요소보다 타겟이 더크고 오른쪽의 요소보다 작다면 타겟은
        left = middle + 1; // 왼쪽을 미들에 1을 더한 값으로 미들 뒤쪽을 살펴본다 오른쪽은 그대로 마지막 요소
      } else {
        right = middle - 1; // 그게 아니라면 오른쪽을 미들 앞의 숫자로 만들어 준다
      }
    }
  }

  return -1;
};
