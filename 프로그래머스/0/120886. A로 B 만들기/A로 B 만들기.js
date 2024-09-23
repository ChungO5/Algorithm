function solution(before, after) {
    let beforeArr = before.split('').sort();
    let afterArr = after.split('').sort();
    
    return JSON.stringify(beforeArr)===JSON.stringify(afterArr)?1:0;
}