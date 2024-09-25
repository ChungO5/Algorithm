function solution(s){
    let nump = 0;
    let numy = 0;
    
    for(var i=0; i<s.length; i++){
        if(s[i]==='p' || s[i]==='P'){
            nump++;
        }
        if(s[i]==='y' || s[i]==='Y'){
            numy++;
        }
    }
    return (nump===numy) ? true:false
}