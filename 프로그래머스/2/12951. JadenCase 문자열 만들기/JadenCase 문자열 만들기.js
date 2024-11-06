function solution(s) {
    s = s.toLowerCase().split(' ')
    return s.map((a)=> a === ' '? a : a.length > 1 ? a[0].toUpperCase()+a.slice(1) : a.toUpperCase()).join(' ')
}