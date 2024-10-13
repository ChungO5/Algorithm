T = int(input())

for i in range(1, T+1):
    n_list = map(int, input().split())
    print('#%d %d'%(i, max(n_list)))