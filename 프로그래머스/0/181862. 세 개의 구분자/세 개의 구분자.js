function solution(myStr) {
    var answer = myStr.replace(/[a-c]/g, ' ').split(' ').filter((a) => a.length>0)
    if (answer.length === 0){
        answer.push('EMPTY')
    }
    
    return answer;
}