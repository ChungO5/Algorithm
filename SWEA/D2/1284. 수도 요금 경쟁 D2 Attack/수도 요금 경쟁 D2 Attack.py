T = int(input())

for i in range(T):
    P, Q, R, S, W = map(int, input().split())
    A = P * W
    if W <= R:
        B = Q
    else:
        B = Q + S * (W - R)
        
    if A < B:
        print("#%d %d"%(i+1, A))
    else:
        print("#%d %d"%(i+1, B))