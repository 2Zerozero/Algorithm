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
