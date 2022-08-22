function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const count = lottos.filter((num) => win_nums.includes(num)).length;
  const unknown = lottos.filter((num) => num === 0).length;

  return [rank[count + unknown], rank[count]];
}
