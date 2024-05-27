/*
  문제 : 덧셈 함수

  매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
  매개변수의 갯수 제한은 없습니다.
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
  let result = 0;

  function sum() {
    result = input[0] + input[1];
  }

  sum();
  console.log(result);
  process.exit();
});
