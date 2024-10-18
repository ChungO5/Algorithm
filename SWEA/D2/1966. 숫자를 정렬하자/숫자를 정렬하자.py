T = int(input())

for i in range(1, T + 1):
    N = int(input())
    num_list = map(int, input().split())
    print('#%d'%i, *sorted(num_list))