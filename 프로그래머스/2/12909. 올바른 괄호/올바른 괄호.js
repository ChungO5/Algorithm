function solution(s){
    var answer = true;
    var a = []    
    
    for(var i=0; i<s.length; i++){
        if(s[i]==='('){
            a.push('(')
        }
        else if(s[i]===')'){
            if(a.length != 0){
                a.pop()
            }
            else{
                answer = false
                break
            }
        }
    }
    if(a.length !== 0){
        answer = false
    }
    return answer;
}