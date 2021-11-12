const robotPath = function (room, src, dst) {
    // src 는 로봇의 현재 위치, dst는 목표지점
     const visit= Array(room.length).fill(0).map(()=>Array())    //  [ [], [], [], [], [] ]
     const queue= [[...src, 1]]   //queue=[[4,2,1]]
     visit[src[0]][src[1]] = 1    // [ [], [], [], [], [ <empty x 2>, 1 ] ]   //한번 간 곳은 다시 가지 않도록.
     const direction=[
       [0,1],
       [0,-1],
       [1,0],
       [-1,0]
     ]
     const ny = room.length-1      // 세로 면의 idx -> 4  (length는 5)
     const nx = room[0].length-1   // 가로 면의 idx -> 5  (length는 6)
     
     while(queue.length!==0){
       let result = queue.shift()   //result=[4,2,1]
       let [y,x,cnt] = result;      // y=4, x=2, cnt=1
       for(let i =0; i<direction.length; i++){
         let dy= y + direction[i][0]   //4               //배열의 범위를 벗어난경우 반복문의 처음으로 돌아가라 (x)
         let dx= x + direction[i][1]   //3
         if(dx<0 || dy<0 || dx>nx || dy>ny) continue;   
         if(room[dy][dx]===1) continue;                 //콘솔에 0 출력됨.
         if(visit[dy][dx]===1) continue;                // 지금은 없음.
         visit[dy][dx]=1                                // visit= [ [], [], [], [], [ <empty x 2>, 1, 1 ] ]
         queue.push([dy,dx,cnt+1])                  //queue=[[4],[3],[2]]    
         if(dy===dst[0] && dx===dst[1]) return result[2];   //cnt 를 return
       }
     }
   };
   