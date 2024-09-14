function solution(my_string, s, e) {
    var answer = my_string.split('').splice(s,e-s+1).reverse().join('')
    return my_string.slice(0,s)+answer+my_string.slice(e+1);
}