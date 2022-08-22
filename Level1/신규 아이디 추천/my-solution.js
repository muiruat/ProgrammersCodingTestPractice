function solution(new_id) {
  const step2 = new_id
    .toLowerCase()
    .split('')
    .filter((char) => {
      return (
        (char >= '0' && char <= '9') || (char >= 'a' && char <= 'z') || char === '-' || char === '_' || char === '.'
      );
    })
    .join('');

  const step3 = step2
    .split('')
    .filter((char, index) => {
      if (char !== '.') return true;
      return char !== step2[index + 1];
    })
    .join('');

  const step4 = step3
    .split('')
    .filter((char, index) => {
      if (index === 0 || index === step3.length - 1) return char !== '.';
      return true;
    })
    .join('');

  const step5 = step4.length === 0 ? 'a' : step4;

  const step6 = step5
    .split('')
    .filter((char, index) => index >= 0 && index <= 14)
    .filter((char, index) => {
      if (index !== 14) return true;
      return char !== '.';
    })
    .join('');

  let answer = step6;
  while (answer.length <= 2) answer += answer[answer.length - 1];

  return answer;
}
