T = int(input())

for i in range(T):
    l = list(map(int, input().split()))

    m = (l[1] + l[3]) % 60
    h = (l[0] + l[2] + (l[1] + l[3]) // 60) % 12

    if h == 0:
        h = 12
    print("#%d %d %d" % (i + 1, h, m))
