/*
  문제 : 암스트롱 수 구하기

  100부터 999까지 암스트롱 수를 구하시오.

  암스트롱 수란?

  세 자리의 정수 중에서 각 자리의 수를 세 제곱한 수의 합과 자신이 같은 수를 말한다.
  예를 들어 153 = 1 + 125 + 27 이다.
  이와 같은 수를 암수트롱 수라고 한다.
*/

let answer = [];

for (let i = 100; i <= 999; i++) {
  let numbers = String(i).split('');

  if (i === numbers[0] ** 3 + numbers[1] ** 3 + numbers[2] ** 3) {
    answer.push(i);
  }
}

console.log(answer);
