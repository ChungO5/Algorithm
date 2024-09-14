function solution(my_string) {
    var answer = '';
    let strSet = new Set(my_string.split(''))
    
    return [...strSet].join('')
}