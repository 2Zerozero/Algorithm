/*
  문제27 : 객체 만들기

  첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
  두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

  입력 값
  Yujin Hyewon
  70 100

  출력 값
  {'Yujin': 70, 'Hyewon': 100}
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('이름을 입력하세요: ', (keysInput) => {
  rl.question('점수를 입력하세요: ', (valuesInput) => {
    const keys = keysInput.split(' ');
    const values = valuesInput.split(' ');
    const obj = {};

    for (let i = 0; i < keys.length; i++) {
      obj[keys[i]] = parseInt(values[i], 10);
    }

    console.log(obj);
    rl.close();
  });
});
