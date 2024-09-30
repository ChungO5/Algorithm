function solution(A, B) {
    if (A === B) return 0
    
    var answer = 0;
    
    for (let i = 0; i <= A.length; i++){
        A = A[A.length-1]+A.slice(0, A.length-1)
        answer++
        if (A===B){
            break
        }
    }
    
    return answer > A.length ? -1 : answer;
}