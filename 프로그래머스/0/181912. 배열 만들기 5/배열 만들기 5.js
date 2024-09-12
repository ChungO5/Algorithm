function solution(intStrs, k, s, l) {
    var answer = [];
    for (let i of intStrs){
        let n = Number(i.slice(s, s+l));
        if (n > k){
            answer.push(n)
        }
    }
    return answer;
}