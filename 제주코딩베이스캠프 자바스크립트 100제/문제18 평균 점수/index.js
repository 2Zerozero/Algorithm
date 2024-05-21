/*
  문제18 : 평균 점수
  영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
  공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
  
  단, 소숫점 자리는 모두 버립니다.
*/

/*
  입력 값
  20 30 40
  
  출력 값
  30
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
  let score = input;
  let sum = 0;
  let average = 0;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }

  average = Math.floor(sum / score.length); // Math.floor 소수점 자리를 모두 버림

  console.log(average);
  process.exit();
});
