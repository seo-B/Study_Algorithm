// treeDFS
// 문제
// 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 합니다. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

// 입력
// 인자 1 : node
// 'value', 'children' 속성을 갖는 객체 (Node)
// 'node.value'는 number 타입
// 'node.children'은 Node를 요소로 갖는 배열
// 출력
// 배열을 리턴해야 합니다.
// 주의사항
// 생성자 함수(Node)와 메소드(addChild)는 변경하지 않아야 합니다.
// 입출력 예시
// let root = new Node(1);
// let rootChild1 = root.addChild(new Node(2));
// let rootChild2 = root.addChild(new Node(3));
// let leaf1 = rootChild1.addChild(new Node(4));
// let leaf2 = rootChild1.addChild(new Node(5));
// let output = dfs(root);
// console.log(output); // --> [1, 2, 4, 5, 3]

// leaf1.addChild(new Node(6));
// rootChild2.addChild(new Node(7));
// output = dfs(root);
// console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]

//dfs 깊이 우선 탐색, 현재 정점에서 갈 수 잇는 점들까지 들어가면서 탐색
// 큐를 이용
// 시간 복잡도 O(N^2)

let dfs = function (node, result = []) {
  // TODO: 여기에 코드를 작성합니다.
  // node.value를 result에 담아줌
  // 자식이 있으면 value push, 0번째 부터 반복문으로 확인
  // 자식이 없으면 result return (반복문 밖에서 상위노드의 다음 자식노드를 탐색?)

  // 최상단 노드를 방문도장 쾅!
  if (node.children.length === 0) return [node.value];
  let result = [];
  // 시작 노드를 stack에 넣어주고 방문처리(빈배열에 push)
  result.push(node.value);

  // 최상단 노드에 방문하지 않는 자식노드가 있으면 그 노드를 stack에 넣고 방문처리
  // 방문하지 않은 인접노드가 없다면 스택에서 최상단 노드를 빼줌
  for (let i = 0; i < node.children.length; i++) {
    let temp = dfs(node.children[i]);
    //자식노드들을 탐색할 때 재귀함수를 호출하여 하나하나 result에 포함
    result = [...result, ...temp];
  }
  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
