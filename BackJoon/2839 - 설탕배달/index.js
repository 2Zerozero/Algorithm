const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, '/example.txt');
const input = fs.readFileSync(filePath).toString().split('\n');

let n = Number(input);
let answer = 0;

while(n > 0) {
  if(n % 5 === 0) {
    answer += 1;
    n -= 5;
  }else {
    answer += 1;
    n -= 3;
  }
  if(n < 0) {
    answer = -1;
  }
}

console.log(answer);