function solution(myString, pat) {
    changeString = ''
    for (let i of myString){
        if (i === 'A'){
            changeString += 'B'
        } else{
            changeString += 'A'
        }
    }
    return changeString.includes(pat) ? 1 : 0
}