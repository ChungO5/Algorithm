N = int(input())

print('Gnomes:')
for _ in range(N):
    l = list(map(int, input().split()))
    l2 = sorted(l)
    l3 = l2[::-1]
    if l == l2 or l == l3:
        print('Ordered')
    else:
        print('Unordered')
    