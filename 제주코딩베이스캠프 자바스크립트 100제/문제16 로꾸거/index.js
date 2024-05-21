/*
  문제16 : 로꾸거
  문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
*/

/*
  입력 값
  거꾸로

  출력 값
  로꾸꺼
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line; // 문자열 저장
  rl.close();
});

rl.on('close', () => {
  let answer = input.split('').reverse().join('');

  console.log(answer);
  process.exit();
});
