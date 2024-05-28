/*
  문제 : 해당 문자의 역순

  매개변수로 숫자를 전달하면 그 숫자의 역순을 되돌려주는
  함수를 만들어주세요.

  입력 값
  32125
  15231
  
  출력 값
  52123
  13251
*/

function reverse_to_number(number) {
  //let`s do it
  let str = number.toString();

  let reverseStr = str.split('').reverse().join('');

  return parseInt(reverseStr, 10);
}

let a = reverse_to_number(32125);
console.log(a); // 52123

let b = reverse_to_number(13251);
console.log(b); // 15231
