function solution(arr, k) {
    var answer = arr.map((a)=>{
        if (k % 2 === 1){
            return a*k
        } else{
            return a+k
        }
    });
    return answer;
}