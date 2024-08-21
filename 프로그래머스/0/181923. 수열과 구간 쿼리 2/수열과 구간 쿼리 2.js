function solution(arr, queries) {
    var answer = [];
    for (let i of queries) {
        let Arr = arr.slice(i[0], i[1]+1).filter((a)=>a>i[2])
        if (Arr.length === 0) {
            answer.push(-1)
        } else {
            answer.push(Math.min(...Arr))
        }
    }
    return answer;
}