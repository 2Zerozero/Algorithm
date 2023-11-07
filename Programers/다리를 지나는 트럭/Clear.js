function solution(bridge_length, weight, truck_weights) {
  // bridge_length: 다리의 길이, weight: 다리의 하중, truck_weights: 트럭의 무게
  let bridge = new Array(bridge_length).fill(0); // 새로운 배열의 이름을 bridge , 요소를 0 으로 채운다.
  let time = 0; // 다리를 건너는 시간

  while (bridge.length) {
    // bridge 의 길이만큼 반복된다.
    bridge.shift(); //
    if (truck_weights.length) {
      const sumBridge = bridge.reduce((a, b) => a + b, 0); // 초기값을 명시하지 않는다면, undefined 가 출력될 수도 있다.
      if (sumBridge + truck_weights[0] <= weight) {
        // sumBridge 와 truck_weights 의 합이 weight 를 초과하지 않는다면,
        bridge.push(truck_weights.shift()); // bridge 배열에, truck_weights 의 첫번째 요소를 잘라서 추가한다.
      } else {
        bridge.push(0); // weight 값을 초과했다면, 0을 푸시한다.
      }
    }
    time++; // 이 반복문이 끝나면, ++
  }

  return time;
}
