/*
  문제 : 가장 작은 두 수 더하기

  함수에 배열로 숫자를 전달해서 가장 작은 2개의 숫자의 합을 반환하는 함수를 만들어보세요.

  입력 값
  [10, 50, 20, 30, 40]
  [10, 50, 0, 30, 40]

  출력 값
  30
  10
*/

function sumTwoSmallestNumbers(numbers) {
  //Code here
  let smallNumbers = numbers.sort((a, b) => a - b);

  console.log(smallNumbers[0] + smallNumbers[1]);
}
const sum = sumTwoSmallestNumbers([10, 50, 20, 30, 40]); // 30 (가장 작은 수 10 + 20)
const sum2 = sumTwoSmallestNumbers([10, 50, 0, 30, 40]); // 10 (가장 작은 수 10 + 0)
