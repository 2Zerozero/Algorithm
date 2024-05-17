/*
  문제 10 : 별 찍기
  프로그래밍으로 트리를 작성하시오.
*/

/*
  입력 값
  5

  출력 값
      *
     ***
    *****
   *******
  *********
*/
const level = 5;

for (let i = 1; i <= level; i++) {
  let tree = '';

  // 공백 반복문
  for (let k = 1; k <= level - i; k++) {
    tree = tree + ' ';
  }

  // 별 증가 반복문
  for (let j = 1; j <= i * 2 - 1; j++) {
    tree = tree + '*';
  }
  console.log(tree);
}

// 시작 값을 1로 하는 이유
// 별 증가 반복문 처음에 i 와 j 값이 동일하기 때문에 처음 별은 * 하나로 시작한다.
