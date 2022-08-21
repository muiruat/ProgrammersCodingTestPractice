function solution(survey, choices) {
  let answer = '';

  const personalityScore = new Map();

  ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'].forEach((item) => {
    personalityScore.set(item, 0);
  });

  survey.forEach((item, index) => {
    const [personality1, personality2] = item.split('');

    if (choices[index] < 4) personalityScore.set(personality1, personalityScore.get(personality1) - choices[index] + 4);
    else if (choices[index] > 4)
      personalityScore.set(personality2, personalityScore.get(personality2) + choices[index] - 4);
  });

  answer += personalityScore.get('R') >= personalityScore.get('T') ? 'R' : 'T';
  answer += personalityScore.get('C') >= personalityScore.get('F') ? 'C' : 'F';
  answer += personalityScore.get('J') >= personalityScore.get('M') ? 'J' : 'M';
  answer += personalityScore.get('A') >= personalityScore.get('N') ? 'A' : 'N';

  return answer;
}
