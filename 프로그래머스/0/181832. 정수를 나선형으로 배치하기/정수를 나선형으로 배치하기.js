// 배열을 회전하는 함수
function arrayTurn(arr) {
    let n = arr.length;
    let turnArr = Array.from(Array(n), () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            turnArr[n - j - 1][i] = arr[i][j];
        }
    }
    return turnArr;
}

function solution(n) {
		// 배열 초기화
    let arr = Array.from(Array(n), () => Array(n).fill(0));
    let num = 1;
    
    while (num <= n ** 2) {
        for (let i = 0; i < n; i++) {
		        // 배열에 0이 포함되 있을 경우 실행
            if (arr[i].includes(0)) {
                for (let j = 0; j < n; j++) {
                    if (arr[i][j] === 0) {
                        arr[i][j] = num;
                        num++;
                    }
                }
                break;
            }
        }
        arr = arrayTurn(arr);
    }
    // 배열의 [0][0]값이 1일때까지 회전
    while (arr[0][0] !== 1) {
        arr = arrayTurn(arr);
    }
    return arr;
}
