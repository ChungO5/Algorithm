function solution(n) {
    var answer = String(n).split('').reduce((acc, el)=>{
        return acc += Number(el)
    }, 0);
    return answer;
}