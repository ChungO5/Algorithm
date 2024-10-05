function solution(price, money, count) {
    let sum = ((count + 1) * count) / 2;
    return money - price * sum > 0 ? 0 : price * sum - money;
}
