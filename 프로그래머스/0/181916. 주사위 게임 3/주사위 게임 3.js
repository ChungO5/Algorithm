function solution(a, b, c, d) {
    let arr = [a,b,c,d].sort((a, b) => a-b)
    let [A, B, C, D] = arr
    if (A===D){ 
        return A*1111 // A=B=C=D
    } else if (A===C){ 
        return (A*10+D)**2 //A=B=C
    } else if (B===D){ 
        return (A+D*10)**2 //B=C=D
    } else if (A===B && C===D){
        let result = (A+D) * (A-D)
        return result > 0 ? result : -result // A=B, C=D
    } else if (A===B){
        return C*D // A=B
    } else if (B===C){
        return A*D // B=C
    } else if (C===D){
        return A*B // C=D
    } else {
        return A
    }
    
        
}