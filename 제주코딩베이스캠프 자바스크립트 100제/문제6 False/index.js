/*
  문제 6 : False
  False로 취급하지 않는 것은?
*/

/*
  1. NaN === false
  2. 1 === 1은 true
  3. "" === false
  4. 0 === 0은 false
  5. undefined === false
*/

console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(undefined));
