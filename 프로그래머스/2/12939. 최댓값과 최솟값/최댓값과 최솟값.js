function solution(s) {
    var a = []
    a = s.split(' ')
    a.sort((a, b)=>a-b)
    
    return a[0]+' '+a[a.length-1]
}