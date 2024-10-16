T = int(input())

for _ in range(1, T + 1):
    num = map(int, input().split())
    print("#%d %d" % (_, round(sum(num) / 10)))
