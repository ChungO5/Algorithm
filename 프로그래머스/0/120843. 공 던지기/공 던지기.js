function solution(numbers, k) {
    if (numbers.length % 2 !== 0){
        return (k+1)*2 % numbers.length
    } else {
        console.log((k+1)*2,  (numbers.length / 2))
        return numbers[k*2 / (numbers.length / 2) + 1]
    }
}