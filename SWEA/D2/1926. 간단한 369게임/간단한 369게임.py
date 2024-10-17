TC = int(input())
L = list(map(str, range(1, TC+1)))

for i in range(len(L)):
    sum = 0
    sum += L[i].count('3')
    sum += L[i].count('6')
    sum += L[i].count('9')
    if sum > 0:
        L[i] = '-'*sum
        
print(*L)