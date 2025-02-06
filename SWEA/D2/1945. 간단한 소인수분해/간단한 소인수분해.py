T = int(input())
num = [2,3,5,7,11]

for i in range(T):
    n = int(input())
    l = []
    
    for j in num:
        a = 0    
        while n % j == 0:
            n = n // j
            a += 1
        l.append(a)
    print("#%d"%(i+1), *l,)