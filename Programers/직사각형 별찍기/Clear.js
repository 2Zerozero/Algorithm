// 표준 입력으로, 두 개의 정수 n, m 이 주어진다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력.

// 입력

// 5 3
// 출력

// *****
// *****
// *****

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    // 숫자 하나당 별(*) 1개
    for(let i = 0; i < b; i++) {
        let result = "";
        for(let j = 0; j < a; j++) {
            result += "*";
        }
        console.log(result)
    }
});
