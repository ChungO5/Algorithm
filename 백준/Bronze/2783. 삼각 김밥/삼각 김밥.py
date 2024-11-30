X, Y = map(int, input().split())
N = int(input())

price = 1000 / Y * X

for _ in range(N):
    x, y = map(int, input().split())
    if price > 1000 / y * x:
        price = 1000 / y * x
        
print(price)