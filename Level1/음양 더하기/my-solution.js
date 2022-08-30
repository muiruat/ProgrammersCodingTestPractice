function solution(absolutes, signs) {
  return absolutes.reduce(
    (pre, cur, idx) => (signs[idx] ? pre + cur : pre - cur),
    0
  );
}
