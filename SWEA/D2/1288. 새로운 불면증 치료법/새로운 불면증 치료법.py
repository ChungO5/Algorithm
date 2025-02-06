T = int(input())
S = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"}

for i in range(T):
    N = int(input())
    N_set = set()
    n = N
    count = 0
    while True:
        N_set.update(set(str(n)))
        count += 1
        n += N
        if S == N_set:
            break
    print("#%d %d" % (i + 1, count * N))
