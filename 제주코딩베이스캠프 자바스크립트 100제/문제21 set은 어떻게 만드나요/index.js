/*
  문제21 : set은 어떻게 만드나요?
  
  다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.
*/

/*
  set ?
  중복되지 않는 데이터를 저장하는 데이터 구조
*/

var a = {1, 2, 3, 5, 6, 7}; // 데이터 형식이 아님
var b = {}; // 객체를 생성 리터럴
var c = new Set('javascript'); // 문자열 데이터
var d = new Set(range(5)); // range 라는 메서드는 존재하지 않음
var e = new Set(); // Set 생성