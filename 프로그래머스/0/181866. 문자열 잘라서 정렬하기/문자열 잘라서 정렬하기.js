function solution(myString) {
    return myString.split('x').sort().filter((a)=>a.length !== 0)
}