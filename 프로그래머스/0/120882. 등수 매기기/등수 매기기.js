function solution(score) {
    var answer = [];
    let rank = score.map(([a,b])=> a+b).sort((a,b)=>b-a)
    for (let i of score){
        let sum = i.reduce((a,b)=>a+b, 0)
        answer.push(rank.findIndex((a)=>a === sum)+1)
    }
    return answer;
}