function solution(arr) {
    if (!arr.find((a)=> a===2)){
        return [-1]
    }
    let start = arr.findIndex((a)=> a===2)
    let end = arr.length - [...arr].reverse().findIndex((a)=> a===2)
    return arr.slice(start, end)
}