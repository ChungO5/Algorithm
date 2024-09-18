function solution(my_string) {
    var answer = Array(52).fill(0);
    for (let i of my_string){
        let n = i.charCodeAt()
        if (n > 96){
            answer[n-71] += 1
        } else {
            answer[n-65] += 1
        }
    }
    return answer;
}