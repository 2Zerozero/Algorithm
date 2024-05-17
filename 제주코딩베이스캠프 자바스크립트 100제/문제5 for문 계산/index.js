/*
  문제 5 : for문 계산
  다음 코드의 출력 값은 ?
*/

let a = 10;
let b = 2;

for (let i = 1; i < 5; i += 2) {
  a += i;
  console.log(`i :`, i);
  console.log(`a += i :`, a);
}

console.log(a + b);
