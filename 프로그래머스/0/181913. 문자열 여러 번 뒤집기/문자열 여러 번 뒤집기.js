function solution(my_string, queries) {
    var answer = [...my_string]
    queries.forEach(([s, e])=>{
        let reverseArr = answer.slice(s, e + 1).reverse()
        answer.splice(s, e - s + 1, ...reverseArr)
        
        
    })
    return answer.join('');
}