/*
  문제20 : 몫과 나머지
  
  공백으로 구분하여 두 숫자가 주어집니다.
  두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
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
  let quotient = input[0] / input[1]; // 몫
  let remainder = input[0] % input[1]; // 나머지

  console.log(quotient, remainder);
  process.exit();
});
