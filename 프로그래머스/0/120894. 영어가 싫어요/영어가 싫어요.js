function solution(numbers) {
    let strNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
    let answer = numbers
    for (let i=0; i<10;i++){
        answer = answer.replaceAll(strNum[i], i)
    }
    return answer*1;
}