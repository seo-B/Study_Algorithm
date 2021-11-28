// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2)
  // 부모 노드의 자식 노드의 위치는 다음과 같다.
  // 좌측 자식은 parentIndx * 2 + 1
  // 우측 자식은 parentIndx * 2 + 2
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  let current = heap.length - 1;
  let parent = getParentIdx(current);
  while (parent >= 0 && heap[current] > heap[parent]) {
    swap(current, parent, heap);
    current = parent;
    parent = getParentIdx(current);
  }
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};