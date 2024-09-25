function solution(array) {
    var answer = 0;
    for (let i of array){
        answer += String(i).split('').filter((a)=>a==7).length
    }
    return answer;
}