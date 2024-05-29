/*
  문제 : 두 정수 사이의 수

  두 개의 정수(a, b)를 취하는 함수를 완성하고 입력 매개변수를 포함하여 입력 매개 변수 사의의 모든 정수 배열을 반환하게 하세요.

  입력 값
  5 10
  10 5

  출력 값
  [5, 6, 7, 8, 9, 10]
  [5, 6, 7, 8, 9, 10]
*/

function numberArray(a, b) {
  // 두 정수 크기 비교 후 정렬
  let answer = [];
  let numbers = [a, b].sort((a, b) => a - b);

  // 두 정수 사이의 수 배열에 추가
  for (let i = numbers[0]; i <= numbers[1]; i++) {
    answer.push(i);
  }

  // 정답 출력
  console.log(answer);
}

numberArray(10, 1);
