function solution(arr) {
  const answer = [];

  arr.forEach((num, index) => {
    if (num !== arr[index + 1]) answer.push(num);
  });

  return answer;
}
