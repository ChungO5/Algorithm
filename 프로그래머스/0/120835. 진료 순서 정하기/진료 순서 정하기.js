function solution(emergency) {
    var answer = [];
    let sorted = [...emergency].sort((a,b) => b-a)
    for (let i of emergency){
        answer.push(sorted.findIndex((a)=>a===i)+1)
    }
    return answer;
}