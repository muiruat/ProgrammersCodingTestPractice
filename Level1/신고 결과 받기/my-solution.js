function solution(id_list, report, k) {
  const answer = [];
  const id_map = new Map(); // 각 id마다 map을 가지고 있고 그 map안에 사용자를 신고했는지 true, false로 저장
  const report_map = new Map(); // 각 id가 몇번 신고 받았는지 저장

  id_list.forEach((item) => {
    id_map.set(item, new Map()); // 각 id마다 map 생성
    report_map.set(item, 0); // 각 id 신고 받은 횟수 0으로 초기화
  });

  report.forEach((item) => {
    const [reporter, reportee] = item.split(' ');

    if (!id_map.get(reporter).get(reportee)) {
      id_map.get(reporter).set(reportee, true);
      report_map.set(reportee, report_map.get(reportee) + 1);
    }
  });

  id_list.forEach((item) => {
    let count = 0;

    id_map.get(item).forEach((value, key) => {
      if (value && report_map.get(key) >= k) count += 1;
    });

    answer.push(count);
  });

  return answer;
}
