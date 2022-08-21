function solution(sizes) {
  const rotated = sizes.map((item) => {
    const [w, h] = item;
    return w >= h ? [w, h] : [h, w];
  });

  const answer = [0, 0];
  rotated.forEach((item) => {
    const [w, h] = item;
    answer[0] = answer[0] < w ? w : answer[0];
    answer[1] = answer[1] < h ? h : answer[1];
  });

  return answer[0] * answer[1];
}
