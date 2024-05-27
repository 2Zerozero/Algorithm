/*
  문제 : 문자열 개수 구하기

  문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.
*/

/*
  입력 값
  const i = "aaabbbccc";
  const i2 = "aabbaa";
  const i3 = "abbbffd";
  
  출력 값
  const o = "a3b3c3";
  const o2 = "a2b2a2";
  const o3 = "a1b3f2d1";
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line;
  rl.close();
});

rl.on('close', () => {
  let result = ''; // 정답
  let str = input; // 받아오는 값
  let count = 1; // 문자열 카운트

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  result += str[str.length - 1] + count;

  console.log(result);
  process.exit();
});

/*
  입력값 
  aaabbbccc

  초기 상태: result = "", count = 1
  i = 1: str[1] (a) === str[0] (a), count 증가: count = 2
  i = 2: str[2] (a) === str[1] (a), count 증가: count = 3
  i = 3: str[3] (b) !== str[2] (a), result에 str[2]과 count 추가: result = "a3", count = 1
  i = 4: str[4] (b) === str[3] (b), count 증가: count = 2
  i = 5: str[5] (b) === str[4] (b), count 증가: count = 3
  i = 6: str[6] (c) !== str[5] (b), result에 str[5]과 count 추가: result = "a3b3", count = 1
  i = 7: str[7] (c) === str[6] (c), count 증가: count = 2
  i = 8: str[8] (c) === str[7] (c), count 증가: count = 3
  마지막 문자 처리: result에 str[8]과 count 추가: result = "a3b3c3"
*/
