function solution(sizes) {
  let first = 0;
  let second = 0;

  sizes.forEach((item) => {
    const [long, short] = item[0] >= item[1] ? [item[0], item[1]] : [item[1], item[0]];

    if (first < long) first = long;

    if (second < short) second = short;
  });

  return first * second;
}
