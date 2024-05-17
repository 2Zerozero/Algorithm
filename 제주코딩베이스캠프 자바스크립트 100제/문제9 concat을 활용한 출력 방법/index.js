/*
  문제 9 : concat을 활용한 출력 방법
  소스 코드를 concat 을 이용해 완성하기.

  concat : 이어주는 역활을 하는 메서드
*/

// 데이터
let year = '2019';
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

let result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);

// 출력
// 2019/04/26 11:34:27
