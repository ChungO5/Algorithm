function slope(a, b){
    return [a[0]-b[0], a[1]-b[1]]
}

function isEqulSlope(a, b){
    return a[0]*b[1] === a[1]*b[0]
}

function solution(dots) {
    if (isEqulSlope(slope(dots[0], dots[1]), slope(dots[2], dots[3]))) return 1
    if (isEqulSlope(slope(dots[0], dots[2]), slope(dots[1], dots[3]))) return 1
    if (isEqulSlope(slope(dots[0], dots[3]), slope(dots[1], dots[2]))) return 1
    return 0
}
