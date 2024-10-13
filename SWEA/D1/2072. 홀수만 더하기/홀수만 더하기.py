N = int(input())
for i in range(N):
    n_list = map(int, input().split())
    sum = 0
    for j in n_list:
        if j % 2 == 1:
            sum += j
    print('#%d %d'%(i+1, sum))