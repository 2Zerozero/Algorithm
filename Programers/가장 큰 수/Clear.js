function solution(numbers) {
  // map 으로, 정수를 문자열로 바꿔주고 sort 로 숫자를 비교 정렬, join 으로 문자열을 이어붙인다.
  let nums = numbers
    .map((n) => n + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  // 출력 값 확인
  // console.log(nums)
  // 리턴
  return nums[0] === "0" ? "0" : nums;
}
