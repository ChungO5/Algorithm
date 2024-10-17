import math

def comb(a, b):
    if b == 0:
        return 1
    return math.factorial(a)//math.factorial(b)//math.factorial(a-b)

T = int(input())

for _ in range(1, T+1):
    N = int(input())
    print('#%d'%_)
    for i in range(N):
        for j in range(i+1):
            print(comb(i, j), end=' ')
        print()