function solution(numbers, n) {
    var answer = 0;
    for (i of numbers) {
        if (answer > n) {
            return answer
        }
        answer += i
    }
    return answer;
}