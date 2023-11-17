// DPS 방식

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const qty = Number(input.shift());
const pair = Number(input.shift());
const computers = input.map((v) => v.split(" ").map(Number));

let answer = 0;

// 1번 노드부터 시작하기 때문에 컴퓨터 수에 +1한 길이의 방문 배열
let visited = Array(qty + 1).fill(false);

// 빈 원소를 갖는 2차원 배열
let graph = [...Array(qty + 1)].map(() => []);

// 양방향 그래프로 만들기
computers.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const dfs = (from) => {
  // 방문하지 않았다면 현재 노드 방문 처리하고 answer증가시키고 dfs 실행
  for (let to of graph[from]) {
    if (!visited[to]) {
      visited[to] = true;
      answer++;
      dfs(to);
    }
  }
};

// 노드1부터 시작
dfs(1);

// 1번 컴퓨터를 제외하고 개수 리턴
console.log(answer - 1);

// BFS 방식

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const qty = Number(input.shift());
const pair = Number(input.shift());
const computers = input.map((v) => v.split(" ").map(Number));

let answer = 0;
let visited = Array(qty + 1).fill(false);
let graph = Array.from(Array(qty + 1)).map(() => []);

computers.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const bfs = (start) => {
  let queue = [start];
  while (queue.length) {
    const node = queue.shift();
    if (!visited[node]) {
      visited[node] = true;
      answer++;
      queue.push(...graph[node]);
    }
  }
};

bfs(1);
console.log(answer - 1);
