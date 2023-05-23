var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

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