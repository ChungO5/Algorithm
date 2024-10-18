T = int(input())

for i in range(1, T + 1):
    S = input()
    if S == S[::-1]:
        print('#%d 1'%(i))
    else:
        print('#%d 0'%(i))