function solution(num, k) {
    let kIndex = [...String(num)].findIndex((el)=> Number(el) === k)
    
    return kIndex < 0 ? kIndex : kIndex+1;
}