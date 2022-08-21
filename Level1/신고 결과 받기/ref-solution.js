function solution(id_list, report, k) {
  // 중복 신고 제거 후 배열에 신고한 사람과 신고 받은 사람 배열로 담음
  const reports = [...new Set(report)].map((item) => item.split(' '));

  // 신고 받은 사람의 신고 받은 횟수 map으로 담음
  const reporteeMap = new Map();
  reports.forEach((item) => {
    const reportee = item[1];

    reporteeMap.set(reportee, reporteeMap.get(reportee) + 1 || 1);
  });

  // 신고한 사람의 메일 받을 횟수 map으로 담음
  const reporterMap = new Map();
  reports.forEach((item) => {
    const reporter = item[0];
    const reportee = item[1];

    if (reporteeMap.get(reportee) >= k) reporterMap.set(reporter, reporterMap.get(reporter) + 1 || 1);
  });

  const answer = id_list.map((item) => {
    const count = reporterMap.get(item) || 0;

    return count;
  });

  return answer;
}
