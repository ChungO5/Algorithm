T = int(input())
for i in range(T):
    L = list(map(int, input().split()))
    s = sum(L) - max(L) - min(L)
    print('#%d %0.0f'%(i+1, round(s/8)))