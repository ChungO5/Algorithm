function solution(arr) {
    let n = arr.length
    var answer = Array.from(Array(n), ()=>Array(n).fill(0))
    for (let i=0; i < n; i++){
        for (let j=0; j<n; j++){
            answer[i][j] = arr[j][i]
        }
    }
    
    for (let i=0; i < n; i++){
        for (let j=0; j<n; j++){
            if (arr[i][j] !== answer[i][j]){
                return 0
            }
        }
    }
    return 1;
}