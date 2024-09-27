function solution(rank, attendance) {
    let answer = 0
    let arr = []
    let index = []
    for (let i=0; i<rank.length; i++){
        if (attendance[i]===true){
            arr.push(rank[i])
        }
    }
    arr.sort((a,b)=>a-b)
    for (let i of arr.slice(0,3)){
        index.push(rank.findIndex((a)=>a===i))
    }
    answer = index[0]*10000 + index[1]*100 + index[2]
    return answer
}