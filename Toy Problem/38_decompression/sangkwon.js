// decompression
// 문제
// 한 변의 길이가 2의 제곱수인 정사각형의 흑백 이미지가 2차원 배열로 주어집니다. 각 좌표에는 0(백) 또는 1(흑)이 저장되어 있습니다. 이미지에 포함된 데이터가 모두 1이면 '1', 모두 0이면 '0' 한 글자로 압축할 수 있습니다. 그렇지 않은 경우, 이를 대문자 X로 표시하고 전체를 4등분하여 재귀적으로 압축합니다. 4등분한 영역의 순서는 좌측 상단, 우측 상단, 좌측 하단, 우측 하단입니다.

// 입력
// 인자 1 : image
// 배열을 요소로 갖는 배열
// image.length, image[i].length는 1,024 이하
// image[i]는 number 타입을 요소로 갖는 배열
// image[i][j]는 세로로 i, 가로로 j인 지점의 정보를 의미
// image[i][j]는 0 또는 1
// 출력
// string 타입을 리턴해야 합니다.
// 주의사항
// 두 배열의 길이의 합은 1,000,000 이하입니다.
// 어떤 배열 arr의 k번째 요소는 arr[k-1]을 의미합니다.
// 입출력 예시
// let image = [
//   [1, 0, 1, 1],
//   [0, 1, 1, 1],
//   [0, 0, 1, 1],
//   [0, 0, 0, 0],
// ];
// let result = decompression(image);
// console.log(result); // --> 'XX100110X1100​'

// image = [
//   [0, 0, 0, 0, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1, 1, 1, 0],
//   [0, 0, 0, 0, 1, 1, 1, 0],
//   [1, 1, 1, 1, 0, 0, 0, 0],
//   [1, 1, 1, 1, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 0, 1, 1],
//   [1, 1, 1, 1, 0, 1, 1, 1],
// ];
// result = decompression(image);
// console.log(result); // --> 'X0X101X10101X00X10011'
// Advanced
// decompression과 반대로 정사각형으로 표현된 데이터를 압축한 문자열을 입력받아 원래의 사각형을 리턴하는 함수 compression을 작성해 보세요. 레퍼런스 코드는 따로 제공하지 않습니다.

const decompression = function (image) {
    // TODO: 여기에 코드를 작성합니다.
    let makeResult = function (ys, ye, xs, xe, array) {
      if(ys === ye) return String(array[ys][xs])
    let midY = Math.floor((ys + ye) / 2)
    let midX = Math.floor((xs + xe) / 2)
    let leftUp = makeResult(ys, midY, xs, midX, array)
    let rightUp = makeResult(ys, midY, midX + 1, xe, array)
    let leftDown = makeResult(midY + 1, ye, xs, midX, array)
    let rightDown = makeResult(midY + 1, ye, midX + 1, xe, array)
    const result = leftUp + rightUp + leftDown + rightDown;
    if (result === '1111') return '1';
    else if (result === '0000') return '0';
    else return 'X' + result;
    }
    return makeResult(0, image.length - 1, 0, image.length - 1, image )
  };