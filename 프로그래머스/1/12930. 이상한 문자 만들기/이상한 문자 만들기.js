function changeStr(str) {
    let arr = [...str]
    for (let i = 0; i < str.length; i++){
        if (i % 2 === 0){
            arr[i] = arr[i].toUpperCase()
        }
    }
    return arr.join('')
}

function solution(s) {
    var answer = s.toLowerCase().split(' ').map((a)=> changeStr(a)).join(' ')
    return answer;
}