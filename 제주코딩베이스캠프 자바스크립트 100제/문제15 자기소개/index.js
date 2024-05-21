/*
  문제15 : 자기소개
  신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.
  
  만약 입력으로 `김다정`이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 해주세요.
*/

/*
  템플릿 리터럴 이란?
  ES6부터는 backtick 문자열(``) 안에서 $와 중괄호로 표현식을 사용할 수 있습니다.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line.split(' ').map((v) => String(v));
  rl.close();
});

rl.on('close', () => {
  console.log(`안녕하세요. 저는 ${input}입니다.`);
  process.exit();
});
