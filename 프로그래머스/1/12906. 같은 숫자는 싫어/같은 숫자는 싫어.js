function solution(arr)
{
    var answer = [arr[0]];
    let item = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (item !== arr[i]) {
            answer.push(arr[i])
            item = arr[i]
        } 
    }
    
    return answer;
}