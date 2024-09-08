function solution(l, r) {
    var answer = [];
    let num = ['0','5']
    for (let i=5; i <= r; i += 5){
        let isTrue = true
        for (let j of String(i)){
            if (!num.includes(j)){
                isTrue = false
            }
        }
        if (isTrue){
            answer.push(i)
        }
    }
    answer = answer.filter((a)=> a >= l && a <= r)
    if (answer.length === 0) {
        answer.push(-1)
    }
    return answer;
}