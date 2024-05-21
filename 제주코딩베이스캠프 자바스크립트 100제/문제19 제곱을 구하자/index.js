/*
  문제19 : 제곱을 구하자

  공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
*/

/*
  곱하기 = * 로 표현한다.
  제곱 = ** 로 표현한다.

  Math.pow(base, exponent) 메서드를 사용해서 구하는 방법도 있다.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line.split(' ').map((v) => parseInt(v));
  rl.close();
});

rl.on('close', () => {
  console.log(input[0] ** input[1]);
  process.exit();
});
