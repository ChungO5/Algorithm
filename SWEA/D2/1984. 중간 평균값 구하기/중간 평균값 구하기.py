T = int(input())

for i in range(1, T + 1):
    l = list(map(int, input().split()))
    print("#%d" % (i), round(sum(sorted(l)[1:9]) / 8))
