const rangeMinimum = function (arr, ranges) {
    // ts: tree start. te: tree end
    // arr의 ts부터 te까지를 tree로 만든다.
  
  
    const createMinTree = (arr, ts, te) => {
      if (ts === te) {
        return { value: arr[ts] };
      }
      const mid = parseInt((ts + te) / 2);
      const left = createMinTree(arr, ts, mid);
      const right = createMinTree(arr, mid + 1, te);
      return {
        value: Math.min(left.value, right.value),
        left,
        right,
      };
    };
  
  
    const tree = createMinTree(arr, 0, arr.length - 1);
  //   const arr = [1, 3, 2, 7, 9, 11];
  //   tree = {
  //        value: 1,
  //        left: {
  //          value: 1,
  //          left: { value: 1, left: { value: 1 }, right: { value: 3 } },
  //          right: { value: 2 }
  //        },
  //        right: {
  //          value: 7,
  //          left: { value: 7, left: { value: 7 }, right: { value: 9 } },
  //          right: { value: 11 }
  //        }
  //      }
  
    // rs: range start, re: range end
  
    // ts 0, te 2, rs 1 re 4, tree.left 첫번째꺼 false && true => false 두번째꺼 false || false => mid 1
        // 0, 1, rs 1, re 4, tree.left.left 첫번째꺼 false && true => false 두번째꺼 false || false => mid 0
            // 0, 0, 1, 4 tree.left.left.left 두번째가 true Number.MAX_SAFE_INTEGER
            // 1, 1, 1, 4 tree.left.left.right 첫번째가 true tree value
        // 2, 2, rs 1, re 4, tree.left.right 첫번째가 true tree value
    // ts 3, te 5, rs 1 re 4, tree.right 첫번째 두번째 false => mid 4
      // 3, 4, 1, 4 tree.right.left 첫번째 true => tree value
      // 5, 5, 1, 4 tree.right.right 첫번째 false 두번째 true Number.MAX_SAFE_INTEGER
    const findMin = (ts, te, rs, re, tree) => {
      // 현재 tree와 구간이 정확히 일치하거나
      // 구간이 tree를 포함할 경우
      if (rs <= ts && te <= re) { // range 안에 트리가 있거나, 같거나
        return tree.value;
      }
      // 현재 tree에 주어진 구간이 겹치지 않는 경우
      if (te < rs || re < ts) { // range가 ts~ te 바깥에 있을 경우, range 시작 점이 te 보다 크거나, range의 끝 지점보다 ts가 크거나
        return Number.MAX_SAFE_INTEGER;
      }
      // 겹치는 부분이 존재하는 경우
      const mid = parseInt((ts + te) / 2);
      return Math.min(
        findMin(ts, mid, rs, re, tree.left),
        findMin(mid + 1, te, rs, re, tree.right)
      );
    };
  
    const mins = ranges.map((range) => {
      const [start, end] = range;
      return findMin(0, arr.length - 1, start, end, tree);
    });
    return mins;
  };
  