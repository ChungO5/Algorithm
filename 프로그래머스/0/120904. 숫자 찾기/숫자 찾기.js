function solution(num, k) {
    let kIndex = [...String(num)].findIndex((el)=> Number(el) === k)
    
    return kIndex < 0 ? -1 : kIndex+1;
}