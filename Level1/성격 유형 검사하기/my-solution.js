function solution(survey, choices) {
  var personality = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  var answer = '';

  for (var i = 0; i < survey.length; i++) {
    switch (choices[i]) {
      case 1:
        personality[survey[i][0]] += 3;
        break;
      case 2:
        personality[survey[i][0]] += 2;
        break;
      case 3:
        personality[survey[i][0]] += 1;
        break;
      case 4:
        break;
      case 5:
        personality[survey[i][1]] += 1;
        break;
      case 6:
        personality[survey[i][1]] += 2;
        break;
      case 7:
        personality[survey[i][1]] += 3;
        break;
    }
  }

  if (personality['R'] >= personality['T']) answer += 'R';
  else answer += 'T';

  if (personality['C'] >= personality['F']) answer += 'C';
  else answer += 'F';

  if (personality['J'] >= personality['M']) answer += 'J';
  else answer += 'M';

  if (personality['A'] >= personality['N']) answer += 'A';
  else answer += 'N';

  return answer;
}
