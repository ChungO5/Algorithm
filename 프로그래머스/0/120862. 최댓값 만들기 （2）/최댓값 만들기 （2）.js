function solution(numbers) {
    let num1 = 0
    let num2 = 0
    numbers.sort((a,b) => a-b)
    num1 = numbers[0]*numbers[1]
    num2 = numbers[numbers.length-1]*numbers[numbers.length-2]
    return num1 > num2 ? num1 : num2
}