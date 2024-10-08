function solution(arr, divisor) {
    var answer = arr.filter((a) => a % divisor === 0).sort((a, b) => a - b);
    return answer.length === 0 ? [-1] : answer;
}
