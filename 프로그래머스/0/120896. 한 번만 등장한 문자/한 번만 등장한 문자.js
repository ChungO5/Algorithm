function solution(s) {
    let strArr = s.split('')
    let strSet = new Set(strArr)
    let answer = []
    
    for (let i of strSet) {
        if (strArr.filter((a)=> a===i).length === 1){
            answer.push(i)
        }
    }
    
    return answer.sort().join('')
    
}