function solution(my_string) {
    return my_string.split('').filter((a)=> '1234567890'.includes(a)).map((a)=>Number(a)).sort((a,b)=>a-b)
}