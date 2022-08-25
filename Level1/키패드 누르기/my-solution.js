function solution(numbers, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 0, 11],
  ];

  const left = [3, 0];
  const right = [3, 2];

  let answer = '';
  numbers.forEach((number) => {
    keypad.forEach((row, index1) => {
      row.forEach((key, index2) => {
        if (number === key) {
          const [r, c] = [index1, index2];
          const llength = Math.abs(left[0] - r) + Math.abs(left[1] - c);
          const rlength = Math.abs(right[0] - r) + Math.abs(right[1] - c);

          if (number === 1 || number === 4 || number === 7) {
            answer += 'L';
            left[0] = r;
            left[1] = c;
          } else if (number === 3 || number === 6 || number === 9) {
            answer += 'R';
            right[0] = r;
            right[1] = c;
          } else {
            if (llength > rlength) {
              answer += 'R';
              right[0] = r;
              right[1] = c;
            } else if (llength < rlength) {
              answer += 'L';
              left[0] = r;
              left[1] = c;
            } else {
              if (hand === 'right') {
                answer += 'R';
                right[0] = r;
                right[1] = c;
              } else if (hand === 'left') {
                answer += 'L';
                left[0] = r;
                left[1] = c;
              }
            }
          }
        }
      });
    });
  });

  return answer;
}
