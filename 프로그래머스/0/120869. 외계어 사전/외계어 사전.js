function solution(spell, dic) {
    for (let i of dic){
        if (JSON.stringify(spell.sort())===JSON.stringify(i.split('').sort())){
            return 1
        }
    }
    return 2;
}