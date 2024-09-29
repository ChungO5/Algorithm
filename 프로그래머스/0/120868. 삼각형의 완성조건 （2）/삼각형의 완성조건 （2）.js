function solution(sides) {
    let [a, b] = sides.sort((a,b)=>a-b)
    return a * 2 - 1    
}