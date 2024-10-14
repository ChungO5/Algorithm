function check(x, y, board) {
    let n = board.length;
    for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            if (0 <= i && i < n && 0 <= j && j < n) {
                board[i][j] = 1;
            }
        }
    }
}

function solution(board) {
    let boom = [];
    let n = board.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                boom.push([i, j]);
            }
        }
    }
    for (let i of boom) {
        check(i[0], i[1], board);
    }
    return board.reduce((a, b) => a + b.filter((i) => i === 0).length, 0);
}
