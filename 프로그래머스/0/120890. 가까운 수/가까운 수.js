function solution(array, n) {
    var answer = 100
    for (let i of array.sort((a,b)=>a-b)) {
        if (Math.abs(answer-n) > Math.abs(i-n)){
            answer = i
        }
    }
    return answer;
}