/*
  문제 : 문자열 반대로

  전달하는 문자열의 역순을 취하는 함수 reverseMessage를 구현해주세요.

  입력 값
  "Good Bye"
  "Hello"
  
  출력 값
  "eyB dooG"
  "olleH"
*/

function reverseMessage(string) {
  // 문자열을 문자 단위로 쪼갠다.
  // reverse 메서드를 사용해서 반전.
  // join 메서드로 붙인다.
  let result = string.split('').reverse().join('');

  console.log(result);
}

reverseMessage('Good Bye');
