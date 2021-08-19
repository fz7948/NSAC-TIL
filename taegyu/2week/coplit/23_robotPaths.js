function makeBoard(n) {
  let board = [];

  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }

  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  };

  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  };

  return board;
}

function robotPaths(n, board, i, j) {
  let paths = 0;
  board = makeBoard(n);

  // 재귀를 쓸 함수임
  const findPaths = (i, j) => {
    // 목적지에 도달했을때 재귀를 멈추기 위한 조건
    if (i === n - 1 && j === n - 1) {
      paths++;
      return;
    }

    // 배열 범위를 나갔을때 나가지말라고 해주는 조건
    if (i < 0 || j < 0) return;
    if (i >= n || j >= n) return;

    // 방문 여부
    if (board.hasBeenVisited(i, j)) {
      return;
    } else {
      // 일단 이 위치는 방문했다라고 하고 그다음 그 사방향 위 아래 오른쪽 왼쪽 으로 나아갈꺼임
      board.togglePiece(i, j);
      findPaths(i, j + 1); // 오른쪽
      findPaths(i + 1, j); // 아래
      findPaths(i, j - 1); // 왼쪽
      findPaths(i - 1, j); // 위
      board.togglePiece(i, j); // 다시 되돌려 줘서 다른 경우랑 부딪히는걸 피해야함
    }
  };
  findPaths(0, 0); // 0, 0 에서 출발

  return paths;
}

console.log(robotPaths(1));
console.log(robotPaths(2));
console.log(robotPaths(3));
console.log(robotPaths(4));

/*
문제
A robot located at the top left corner of a 5x5 grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right.
but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

make your solution work for a grid of any size.

// A Board class will be useful
*/
