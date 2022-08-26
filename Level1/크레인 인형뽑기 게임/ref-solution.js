function transpose(matrix) {
  return matrix.reduce((result, row) => {
    return row.map((element, index) => {
      return [...(result[index] || []), element];
    });
  }, []);
}

function solution(board, moves) {
  const myBoard = transpose(board).map((row) => {
    return row.reverse().filter((element) => element !== 0);
  });

  let answer = 0;
  const basket = [];
  for (let move of moves) {
    const top = myBoard[move - 1].pop();

    if (!top) continue;

    if (basket[basket.length - 1] === top) {
      basket.pop();
      answer += 2;
      continue;
    }

    basket.push(top);
  }

  return answer;
}
