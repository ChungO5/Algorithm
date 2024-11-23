import math

N = int(input())
L = list(map(int, input().split()))
T, P = map(int, input().split())

print(sum([math.ceil(i / T) for i in L]))
print(N // P, N % P)
