const gossipProtocol = function (village, row, col) {
    let direction = [
      [0, 1], // 우
      [0, -1], // 좌
      [1, 0], // 하
      [-1, 0] // 상
    ]
  
  // let village = [
  //   '0101', // 첫 번째 줄
  //   '0111',
  //   '0110',
  //   '0100',
  // ];
  
    let count = 0;
    let queue = [[row, col]]; // [[1, 2]]
    let visit = Array(village.length).fill(0).map(() => Array()); // [ [], [], [], [] ]
    visit[row][col] = count; // visit[1][2] => [ [], [undefiend, undefiend, 0], [], [] ]
    while(queue.length) {
      let now = queue.shift(); //[1, 2]
      let [y, x] = now; // y = 1, x = 2
      if ( visit[y][x] > count ) count = visit[y][x]; // 일수를 나타내는 것으로 한 번 돌면, 사방에서 갈 수 있는 곳은 다 1이 된다. 그래서 count가 1이 오른다.
      for (let n = 0; n < direction.length; n++ ) {
        let dy = y + direction[n][0]; // 0 0 1 -1 상하좌우를 다 다닌다.
        let dx = x + direction[n][1]; // 1 -1 0 0
        if(dy < 0 || dx < 0 || dy >= village.length || dx >= village[0].length) continue; // 탈출 조건인 지 여부를 확인하고 true 면 다음 n으로 넘어가고, 아니면 다음 if문
        if(visit[dy][dx] || village[dy][dx] === '0' ) continue; 
        // undefined || true => true => 다음 n으로 넘어간다.
        // undefined || false => false => 밑의 코드를 진행한다.
        // 0 || false => false
        // 0 || true => true
        // 1 || false => 1
        // 1 || true => 1
        visit[dy][dx] = visit[y][x] + 1; // 한 칸 씩 더 나아가니깐 1이 더해진다.
        queue.push([dy, dx]) // 해당 부분을 큐에 넣고 다시 진행한다.
      }
    }
    console.log(visit)
    return count
  };

  let village = [
    '0101', // 첫 번째 줄
    '0111',
    '0110',
    '0100',
  ];
  let row = 1;
  let col = 2;
  let output = gossipProtocol(village, row, col);
  console.log(output); 