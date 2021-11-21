const robotPath2 = function (room, src, sDir, dst, dDir) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  let startPoint = [...src, sDir];
  let depth = 0;
  let move = 0;
  const direction = [
    [-1, 0], // 북
    [0, -1], // 서
    [1, 0], // 남
    [0, 1] // 동
  ];
  // 바라보는 방향 시계방향으로 북 서 남 동
  const lookingAt = [1, 4, 3, 2];
  const vaildCheck = ([x, y]) => {
    let rowLimit = room.length - 1;
    let colLimit = room[0].length - 1;
    if (x > rowLimit || x < 0) return false;
    if (y > colLimit || y < 0) return false;
    return true;
  };

  const rotate = (start, end) => {
    // 3, 2, 1, 0 중에 하나
    // 0이면 회전 없음, 1이면 1회전, 2이면 2회전, 3이면 1회전
    let temp = Math.abs(start - end);
    // console.log(temp);
    return temp === 3 ? 1 : temp;
  };
  const dfs = (location, depth, list, move) => {
    // 무한 루프 방지용
    // if (result.length !== 0) {
    //   return;
    // }
    if (depth === 50) {
      return;
    }
    // 재귀 종료 조건
    if (location[0] === dst[0] && location[1] === dst[1]) {
      console.log(location, move, "목적지에 도착했습니다.");
      move += rotate(location[2], dDir);
      result.push(move);
      return;
    }
    let nextLoc = [];
    let nextList = list.map((el) => el.slice());
    nextList[location[0]][location[1]] = 1;

    for (let i = 0; i < direction.length; i++) {
      // 북 서 남 동 순으로 탐색함
      let axisX = location[0] + direction[i][0];
      let axisY = location[1] + direction[i][1];
      let lDir = lookingAt[i];
      // console.log([axisX, axisY], vaildCheck([axisX, axisY]));
      if (vaildCheck([axisX, axisY]) && nextList[axisX][axisY] === 0) {
        // console.log([axisX, axisY, lDir]);
        nextLoc.push([axisX, axisY, lDir]);
      }
    }
    if (nextLoc.length === 0) {
      // console.log(location, move, "막다른 길이네요.");
      return;
    }
    while (nextLoc.length > 0) {
      let target = nextLoc.shift();
      // console.log(rotate(location[2], target[2]));
      let nextMove = move + rotate(location[2], target[2]);
      // console.log(rotate(location[2], target[2]))
      if (rotate(location[2], target[2]) === 0) nextMove--;
      dfs(target, depth + 1, nextList, nextMove + 1);
    }
  };
  dfs(startPoint, depth, room, move);
  return result;
};