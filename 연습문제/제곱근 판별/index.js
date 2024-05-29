/*
  문제 : 제곱근 판별

  어떤 숫자 n을 전달받아 n이 양의 정수 x의 제곱근인지 판별하고 제곱근이라면  양의 정수 x + 1 의 제곱근을 반환하는 함수를 만들려고합니다. 
  만약 전달된 임의의 수 n이 어떠한 수의 제곱근이 아니라면 -1을 반환하게 하세요.
  이때 임의의 정수는 1 이상 50000000 이하라고 가정합니다.

  입력 값
  121
  9
  10

  출력 값
  144
  16
  -1
*/

function squareRoot(number) {
  // 반복문 설정
  // 1 ~ number 까지
  // 제곱을 해서 number 가 된다면 => 제곱근
  // 넘어가면 break;
  let result = 0;

  for (let i = 1; i < number; i++) {
    if (i * i === number) {
      result = (i + 1) * (i + 1);
      break;
    } else if (i * i > number) {
      result = -1;
      break;
    }
  }

  console.log(result);
}

squareRoot(121);
squareRoot(9);
squareRoot(10);
