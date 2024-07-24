function solution(num, k) {
    let numArr = String(num).split('')
    let kIndex = numArr.findIndex((el)=> Number(el) === k)
    
    return kIndex < 0 ? -1 : kIndex+1;
}