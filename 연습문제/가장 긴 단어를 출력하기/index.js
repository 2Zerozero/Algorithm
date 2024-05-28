/*
  문제 : 가장 긴 단어를 출력하기

  매개변수로 전달된 문장에서 가장 긴 단어를 출력해주세요.
*/

function findLongStr(str) {
  let arr = str.split(' ');
  let longStr = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (longStr.length < arr[i].length) {
      longStr = arr[i];
    }
  }

  return longStr;
}

let result = findLongStr('we are the champion');
console.log(result); // champion

let result2 = findLongStr('i`m fine thank you, and you?');
console.log(result2); // thank
