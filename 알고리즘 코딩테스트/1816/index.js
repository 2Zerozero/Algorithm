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
  // 입력값이 모두 수집되면 처리 시작
  input.forEach((numStr) => {
    let num = BigInt(numStr); // 큰 정수를 처리하기 위해 BigInt 사용
    let isWrongPassword = false;

    for (let i = 2n; i <= 1000000n; i++) {
      if (num % i === 0n) {
        isWrongPassword = true;
        break;
      }
    }

    if (isWrongPassword) {
      console.log('NO');
    } else {
      console.log('YES');
    }
  });

  process.exit();
});
