/* 
  readline ?
*/

// readline 모듈 불러오기
const readline = require('readline');

// readline 인터페이스 생성

/*
  readline의 createInterface 메서드를 이용하여 readline.Interface 인스턴스를 생성합니다. 
  input과 output을 지정해주게 되는데, 여기서 process.stdin과 process.stdout은 각각 아래와 같습니다.

  process.stdin : standard input에 대한 Readable Stream
  process.stdout : standard output에 대한 Writable Stream

  [ 틈새 지식 - stream이란? ]

  일련의 연속성을 갖는 흐름을 뜻함. 
  여기서의 stream은 데이터, 파일의 흐름, 다시 말해 컴퓨터 프로그램과 환경 사이에 미리 연결된 입출력 통로라고 이해.
*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입출력 처리하기

/*
  rl.on 을 이용하여 우리는 이벤트와 콜백함수를 전달하게 된다.

  line : 입력받은 값을 한 줄씩 읽어 문자열 타입으로 전달하는 이벤트
  close : 더 이상 입력값이 없을 경우에 해당하는 이벤트

  각각의 이벤트와 같이 전달되는 콜백함수 내부의 메서드들은 각각 아래와 같은 의미를 가지고 있다.
  rl.close() : 인터페이스를 종료하여 무한히 입력받음을 방지.
  process.exit() : 프로세스를 종료.
*/

rl.on('line', (line) => {
  /* 입력값 처리 코드 */
  rl.close();
});

rl.on('close', () => {
  /* 입력 이후 실행 코드 */
  process.exit();
});

// 입력값 처리하기

/*
  입력받은 입력값을 바로 활용할 수는 없다.
  얻고자 하는 형대로 변환할 필요가 있다.

  10 20 30 40 50
  다음과 같이 공백으로 구분된 5개의 숫자가 입력값으로 주어지고, 이를 배열로 저장하여 출력하고자 한다. 
  이에 대한 코드는 아래와 같다.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line.split(' ').map((v) => parseInt(v));
  rl.close();
});

rl.on('close', () => {
  console.log(input);
  process.exit();
});

/*
  line 이벤트는 입력값 한 줄을 문자열로 가져오기 때문에, 이를 split을 이용하여 배열로 변환한 후, 각 값을 숫자로 변경한다. 
  이후 close 이벤트 콜백함수에서 console.log를 이용하여 input을 출력한다.

  입력값에 따라 코드를 작성하여 입출력 처리를 해야한다.
*/
