function solution(numbers, hand) {
  /*
        (0,0) (0,1) (0,2)
        (1,0) (1,1) (1,2)
        (2,0) (2,1) (2,2)
        (3,0) (3,1) (3,2)
      */

  const mainHand = hand === 'left' ? 'L' : 'R';
  const numbers_row = [3, 0, 0, 0, 1, 1, 1, 2, 2, 2];
  const hands_point = { R: [3, 0], L: [3, 2] };

  return numbers
    .map((number) => {
      if (/[147]/.test(number)) {
        hands_point['L'] = [numbers_row[number], 0];
        return 'L';
      }

      if (/[369]/.test(number)) {
        hands_point['R'] = [numbers_row[number], 2];
        return 'R';
      }

      const ldist = Math.abs(hands_point['L'][0] - numbers_row[number]) + Math.abs(hands_point['L'][1] - 1);
      const rdist = Math.abs(hands_point['R'][0] - numbers_row[number]) + Math.abs(hands_point['R'][1] - 1);

      if (ldist < rdist) {
        hands_point['L'] = [numbers_row[number], 1];
        return 'L';
      } else if (ldist > rdist) {
        hands_point['R'] = [numbers_row[number], 1];
        return 'R';
      } else {
        hands_point[mainHand] = [numbers_row[number], 1];
        return mainHand;
      }
    })
    .join('');
}
