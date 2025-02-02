T = int(input())

for _ in range(T):
    N = int(input())
    nums = list(map(int, input().split()))
    score = [0]*101
    for i in nums:
        score[i] = score[i]+1
    
    print("#%d %d"%(N, 100 - score[::-1].index(max(score))))