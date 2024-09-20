function solution(i, j, k) {
    var answer = 0;
    for (i; i <= j; i++){
        let str = String(i).split('').filter((a)=>a===String(k))
        answer += str.length
    }
    return answer;
}