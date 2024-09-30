function solution(n) {
    var answer = 0;
    for (let i=0; i<n; i++){
        answer++
        if (answer%3===0){
            answer++
        }
        if ([...String(answer)].includes('3')){
            i--
        }
    }
    return answer;
}