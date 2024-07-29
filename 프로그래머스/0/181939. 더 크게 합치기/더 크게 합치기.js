function solution(a, b) {
    var answer = 0;
    
    return sumNum(a,b) > sumNum(b,a) ? sumNum(a,b):sumNum(b,a);
}

function sumNum(a, b){
    return Number(String(a)+String(b))
}