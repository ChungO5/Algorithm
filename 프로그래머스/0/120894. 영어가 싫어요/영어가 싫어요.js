function solution(numbers) {
    let strNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
    let num = [0,1,2,3,4,5,6,7,8,9]
    let answer = numbers
    for (let i=0; i<10;i++){
        answer = answer.replaceAll(strNum[i], num[i])
    }
    return answer*1;
}