function solution(order) {  
    let numArr = String(order).split('')
    return numArr.filter((el) => el === '3' || el === '6' || el === '9').length

}