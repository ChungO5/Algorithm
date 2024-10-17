T = int(input())
for i in range(T):
    S = input()
    for j in range(1, 11):
        if S[0:j] == S[j:j*2]:
            print('#%d %d'%(i+1, j))
            break