/*
  문제25 : 원의 넓이를 구하세요

  원의 넓이는 `반지름의 길이 x 반지름의 길이 x 3.14`로 구할 수 있습니다.
  함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

  입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.
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
  // 원의 넓이 함수
  function circle(radius) {
    number = radius;
    console.log(number * number * 3.14);
  }

  circle(input[0]);
  process.exit();
});
