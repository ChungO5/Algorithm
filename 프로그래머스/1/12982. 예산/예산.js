function solution(d, budget) {
    let answer = 0;
    let total = 0;
    d.sort((a, b) => a - b).forEach((a) => {
        if (total + a <= budget) {
            total += a;
            answer++;
        }
    });
    return answer;
}
