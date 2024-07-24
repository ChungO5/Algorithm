function solution(numbers, direction) {
    var answer = [];
    if (direction === 'right'){
        let n = numbers.pop()
        answer.push(n, ...numbers)
    } else{
        let n = numbers[0]
        numbers.shift()
        answer.push(...numbers, n)
        
    }
    return answer;
}