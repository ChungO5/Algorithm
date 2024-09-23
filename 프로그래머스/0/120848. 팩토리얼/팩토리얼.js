function solution(n) {
    var answer = 0;
    let fact = 1;
    for (let i = 1; fact <= n; i++){
        fact *= i;
        answer += 1
    }
    return answer - 1;
}