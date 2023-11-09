function solution(citations) {
  // 1. citations을 오름차순으로 정렬.
  // 2. citations 길이 n을 구한다.
  // 3. 0~n까지 다음을 반복.
  //   3-1. hIndex를 구한다. (hIndex = n-i)
  //   3-2. citations[i]가 hIndex 이상이라면, answer에 hIndex를 저장하고 반복을 중지.
  let answer = 0;
  let sortArray = citations.sort((a, b) => a - b);

  for (let i = 0; i < sortArray.length; i++) {
    let hIndex = sortArray.length - i;

    if (citations[i] >= hIndex) {
      answer = hIndex;
      break;
    }
  }
  return answer;
}
