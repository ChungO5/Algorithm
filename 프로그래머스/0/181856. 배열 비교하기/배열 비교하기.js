function solution(arr1, arr2) {
    var answer = 0;
    if (arr1.length > arr2.length){
        return 1
    } else if (arr1.length < arr2.length) {
        return -1
    } else {
        let sum1 = arr1.reduce((a, b)=>a+b)
        let sum2 = arr2.reduce((a, b)=>a+b)
        return sum1 > sum2 ? 1 : sum1 === sum2 ? 0 : -1
    }
    return answer;
}