/*
  문제 : 평균 구하기

  각각의 학점은 아래와 같은 기준으로 채점되고 있는데요.

  A+ : 4.5
  A  : 4 
  B+ : 3.5
  B  : 3
  C+ : 2.5
  C  : 2
  F  : 1

  이때 학생 A의 평균 점수를 구하는 로직을 구현해주세요.
*/

const studentA = {
  math: 'A+',
  korean: 'B',
  english: 'C+',
  science: 'F',
};

// 성적을 점수로 변환하는 함수
function gradeToPoint(grade) {
  switch (grade) {
    case 'A+':
      return 4.5;
    case 'A':
      return 4;
    case 'B+':
      return 3.5;
    case 'B':
      return 3;
    case 'C+':
      return 2.5;
    case 'C':
      return 2;
    case 'F':
      return 1;
    default:
      return 0;
  }
}

let sum = 0;
let subjectsCount = 0;

for (const subject in studentA) {
  sum += gradeToPoint(studentA[subject]);
  subjectsCount++;
}

let result = sum / subjectsCount;

console.log(result);
