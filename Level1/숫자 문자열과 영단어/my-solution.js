function solution(s) {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  const string = s
    .match(/zero|one|two|three|four|five|six|seven|eight|nine|\d/g)
    .map((item) => {
      const index = words.indexOf(item);
      return index !== -1 ? index : item;
    })
    .join('');

  return parseInt(string);
}
