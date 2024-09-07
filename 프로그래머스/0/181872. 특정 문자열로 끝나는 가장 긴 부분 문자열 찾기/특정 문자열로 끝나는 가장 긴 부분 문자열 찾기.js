function solution(myString, pat) {
    let subStr = []
    for (let i = 0; i < myString.length; i++){
        let s = myString.slice(0, i+1)
        if (s.endsWith(pat)){
            subStr.push(s)
        }
    }
    return subStr.pop()
}