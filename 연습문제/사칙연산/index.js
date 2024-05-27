/*
  문제 : 사칙연산

  사칙연산을 수행하는 함수를 구현해주세요.
*/

let result = 0;

// 더하기
function add(num1, num2) {
  result = num1 + num2;
}

// 빼기
function subtract(num1, num2) {
  result = num1 - num2;
}

// 곱하기
function multiply(num1, num2) {
  result = num1 * num2;
}

// 나누기
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error('0으로는 나눌수 없습니다.');
  }

  result = num1 / num2;
}
