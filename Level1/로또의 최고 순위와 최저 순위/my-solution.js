function solution(lottos, win_nums) {
  let unknown = 0;
  const lottos_map = new Map();

  lottos.forEach((num) => {
    if (num === 0) unknown += 1;
    else lottos_map.set(num, true);
  });

  let count = 0;
  win_nums.forEach((num) => {
    if (lottos_map.get(num)) count += 1;
  });

  const max = unknown + count >= 2 ? 7 - unknown - count : 6;
  const min = count >= 2 ? 7 - count : 6;

  return [max, min];
}
