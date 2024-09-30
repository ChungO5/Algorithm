function solution(chicken) {
    return chicken===0?0: Math.floor((chicken-10) / 9) + 1;
}