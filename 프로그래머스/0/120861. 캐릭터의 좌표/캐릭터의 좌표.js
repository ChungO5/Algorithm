function solution(keyinput, board) {
    var answer = [0, 0];
    for (let i of keyinput) {
        switch(i){
            case 'right': 
                answer[0] < (board[0]-1)/2 ? answer[0] += 1: null
                break;
            case 'left': 
                answer[0] > -board[0]/2+1 ? answer[0] -= 1: null 
                break;
            case 'up': 
                answer[1] < (board[1]-1)/2 ? answer[1] += 1: null 
                break;
            case 'down': 
                answer[1] > -board[1]/2+1 ? answer[1] -= 1: null 
                break;
        }
    }
    return answer;
}