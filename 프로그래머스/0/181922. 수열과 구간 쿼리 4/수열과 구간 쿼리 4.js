function solution(arr, queries) {
    for (let i of queries){
        for (let j = i[0]; j <= i[1]; j++){
            if (j % i[2] === 0){
                arr[j] += 1
            }
        }
    }
    return arr;
}