/*
  문제 : 전화번호

  전화 번호 형식으로 해당 숫자의 문자열을 반환하는 10 개의 정수 배열 (0과 9 사이)을 허용하는 함수를 작성하십시오.

  입력 값
  createPhoneNumber ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

  출력 값
  "(123) 456-7890"
*/

function createPhoneNumber(numbers) {
  let format = '(xxx) xxx-xxxx';

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  console.log(format);
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
