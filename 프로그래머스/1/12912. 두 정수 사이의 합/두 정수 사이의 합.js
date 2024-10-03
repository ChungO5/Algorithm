function solution(a, b) {
    let [x, y] = a > b ? [b, a] : [a, b]
    var answer = 0;
    for (let i = x; i <= y; i++){
        answer += i
    }
    return answer;
}