T = int(input())

for i in range(1, T + 1):
    N, M = map(int, input().split())
    matrix = []
    max = 0
    for j in range(N):
        matrix += list(map(int, input().split()))

    for x in range(N - M + 1):
        for y in range(N - M + 1):
            kill = 0
            for j in range(M):
                kill += sum(matrix[y + (x + j) * N : y + M + (x + j) * N])
            if kill > max:
                max = kill

    print("#%d %d" % (i, max))
