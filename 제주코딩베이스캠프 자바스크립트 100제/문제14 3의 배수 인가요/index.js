/*
  문제14 : 3의 배수 인가요?
  영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.
  입력으로 랜덤한 숫자 n이 주어집니다.
  만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.
*/

/*
  입력 값
  3
  2

  출력 값
  짝
  2
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  /*입력값 처리 코드*/
  input = line.split(' ').map((v) => parseInt(v));
  rl.close();
});

rl.on('close', () => {
  /*입력 이후 실행 코드*/
  let n = input[0];

  if (n % 3 === 0) {
    console.log('짝');
  } else {
    console.log(n);
  }

  process.exit();
});
