const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').split(/\r?\n/).map();

const inputTestCase = [];

// 테스트 케이스
for (let i = 0; i < input.length; i++) {
  console.log(`input: `, input[i]); // 테스트 값 확인
  inputTestCase.push(+input[i]);
}

// 솔루션
solution(inputTestCase);

function solution(testCase) {
  // 코드 작성란
  const [N, ...arr] = testCase;
  console.log(N, ...arr);

  for (let i = 0; i < N; i++) {
    const element = arr[i];

    for (let j = 2; j <= 1_000_000; j++) {
      if (element % j === 0) {
        console.log('NO');
        break;
      }

      if (j === 1_000_000) {
        console.log('YES');
      }
    }
  }
}
