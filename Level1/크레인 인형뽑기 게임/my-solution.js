function solution(board, moves) {
  const basket = [];
  let answer = 0;

  moves.forEach((move) => {
    const columnIndex = move - 1;
    const basketTop = basket[basket.length - 1];
    let index = 0;

    while (board[index] && board[index][columnIndex] === 0) index += 1;

    if (board[index]) {
      if (board[index][columnIndex] === basketTop) {
        board[index][columnIndex] = 0;
        basket.pop();
        answer += 2;
      } else {
        basket.push(board[index][columnIndex]);
        board[index][columnIndex] = 0;
      }
    }
  });

  return answer;
}
