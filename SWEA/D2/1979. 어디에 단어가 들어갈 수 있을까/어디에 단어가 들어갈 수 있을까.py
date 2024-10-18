T = int(input())
for tc in range(1, T+1):
    N, K = map(int, input().split())
    L = [list(map(int, input().split())) for _ in range(N)]
    answer = 0
    for i in range(N):
        count = 0
        for j in range(N):
            if L[i][j] == 1:
                count += 1
            if L[i][j] == 0 or j == N-1:
                if count == K:
                    answer += 1
                count = 0
                
                
        for j in range(N):
            if L[j][i] == 1:
                count += 1
            if L[j][i] == 0 or j == N-1:
                if count == K:
                    answer += 1
                count = 0
                
    print(f"#{tc} {answer}")