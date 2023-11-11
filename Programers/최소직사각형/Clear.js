function solution(sizes) {
  // 긴 길이 요소 중 "가장 긴 요소"
  // 짦은 길이 요소 중 "가장 긴 요소"

  // [ [ 60, 50 ], [ 30, 70 ], [ 60, 30 ], [ 80, 40 ]
  // 60, 70, 70, 80
  // 50, 30, 30, 40
  // "가장 긴 요소" 두개 : 80, 50
  // 80 * 50 = 4000

  let long = [];
  let short = [];

  for (let i = 0; i < sizes.length; i++) {
    // 요소 중 큰 수, 작은 수 분리해서 새로운 배열
    if (sizes[i][0] > sizes[i][1]) {
      long.push(sizes[i][0]);
      short.push(sizes[i][1]);
    } else {
      long.push(sizes[i][1]);
      short.push(sizes[i][0]);
    }
  }

  // Math.max(long) 을 하면 NaN이 나오는 이유: long의 type은 object라서 전개구문(...)을 사용
  return Math.max(...long) * Math.max(...short);
}

function solution(sizes) {
  let long = [];
  let short = [];
  // 다양한 모양과 크기의 명함들 "모두" 수납.
  // 최대한 작게 만들어야함.

  // 가로와 세로의 길이가 바뀌어도 됨
  // WHY? 세로를 가로로 눕히면 반전

  // 반복문
  // 긴 길이 중 가장 긴 길이, 짦은 길이 중 가장 긴 길이
  // [60, 70, 60, 80] / [50, 30, 30, 40]
  for (let array of sizes) {
    array.sort((a, b) => a - b);

    long = Math.max(long, array[1]);
    short = Math.max(short, array[0]);
  }

  return long * short;
}
