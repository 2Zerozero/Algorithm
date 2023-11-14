function solution(number, k) {
  const stack = [];
  let answer = "";

  for (let i = 0; i < number.length; i++) {
    const el = number[i];

    // 제거해야될 수 (k) 가 0이 될때까지 반복, stack의 마지막 요소가 현재 숫자보다 작을경우
    while (k > 0 && stack[stack.length - 1] < el) {
      // stack 배열에서 맨 뒤의 요소를 pop
      stack.pop();
      k--;
    }

    // 현재 숫자를 push
    stack.push(el);
  }

  // 루프 후에 아직 제거해야 할 숫자가 남아 있다면,
  // 스택의 끝에서 나머지 k개의 숫자를 제거.
  stack.splice(stack.length - k, k);

  // 문자열로 변환
  answer = stack.join("");
  return answer;
}

// 예시: number = "1924", k = 2

// 초기 상태: stack = [], answer = ''
// i=0: el=1, stack=[1]
// i=1: el=9, stack=[9]
// i=2: el=2, stack=[9, 2]
// i=3: el=4, stack=[9, 4] (k=1)
// 최종 스택: [9, 4] (k=0)
// 최종 answer: "94"
// 예시: number = "1231234", k = 3

// 초기 상태: stack = [], answer = ''
// i=0: el=1, stack=[1]
// i=1: el=2, stack=[2]
// i=2: el=3, stack=[3]
// i=3: el=1, stack=[3, 1]
// i=4: el=2, stack=[3, 2]
// i=5: el=3, stack=[3, 2, 3]
// i=6: el=4, stack=[3, 2, 4] (k=2)
// 최종 스택: [3, 2, 4] (k=0)
// 최종 answer: "3234"
// 예시: number = "4177252841", k = 4

// 초기 상태: stack = [], answer = ''
// i=0: el=4, stack=[4]
// i=1: el=1, stack=[4, 1]
// i=2: el=7, stack=[7]
// i=3: el=7, stack=[7, 7]
// i=4: el=2, stack=[7, 7, 2]
// i=5: el=5, stack=[7, 7, 5]
// i=6: el=2, stack=[7, 7, 5, 2]
// i=7: el=8, stack=[8]
// i=8: el=4, stack=[8, 4]
// i=9: el=1, stack=[8, 4, 1] (k=3)
// 최종 스택: [8, 4, 1] (k=0)
// 최종 answer: "775841"
