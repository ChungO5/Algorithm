function solution(age) {
    let answer = ''
    let al= ['a','b','c','d','e','f','g','h','i','j']
    for (let i of String(age)){
        answer += al[Number(i)]
    }
    return answer;
}