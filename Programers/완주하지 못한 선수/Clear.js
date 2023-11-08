function solution(participant, completion) {
  let result = "";
  // participant: 참가자, completion: 완주자
  // 참가자 중, 동명이인이 존재할 수 있다.

  // 참가자, 완주자를 알파벳 순으로 정렬한다.
  let p = participant.sort();
  let c = completion.sort();

  // 반복문을 이용해, 정렬된 두 배열을 비교한다.
  for (let i = 0; i < p.length; i++) {
    // 만약 현재 인덱스의 참가자와 완주자가 다르다면,
    if (p[i] !== c[i]) {
      // 현재 인덱스의 참가자가 완주자 목록에는 없는 것이 되므로, 해당 선수 이름을 반환한다.
      return p[i];
    }
  }
  return result;
}

// 해시 데이터란?
// 해시 데이터 구조는 데이터를 효과적으로 저장하고 검색하기 위한 자료 구조.
// 해시 테이블 => 키(key) 값(Value) 쌍으로 데이터를 저장하며, 각 키는 유일해야 한다.

// 중복 키 허용 X
// 데이터를 빨리 검색할 수 있다.
// 삽입과 삭제 작업을 빠르게 수행할 수 있다.
// 메모리 효율성이 좋다.

function solution(participant, completion) {
  // 빈 해시 객체를 생성
  let hash = {};

  // 해시 객체에, 참가자 이름을 등록
  for (let name of participant) {
    if (hash[name]) {
      // 해시 객체에 이름이 존재한다면, 해당 이름에 1을 추가. (동명이인 체크)
      hash[name] += 1;
    } else {
      // 해시 객체에 이름이 없다면, 이름을 새로운 키로 추가하고 값을 1로 설정.
      hash[name] = 1;
    }
  }

  for (let name of completion) {
    // 해시 객체에 완주자의 이름이 존재한다면, 값을 1 감소 시켜준다.
    hash[name] -= 1;
  }

  for (let name in hash) {
    // 해시 객체를 순회하여 값이 1 이상, 즉 완주하지 못한 사람의 이름을 반환한다.
    if (hash[name] > 0) {
      return name;
    }
  }
}
