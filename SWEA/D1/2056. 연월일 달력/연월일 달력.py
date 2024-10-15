T = int(input())
months = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31}

for i in range(1, T+1):
    date = int(input())
    year = date // 10000
    month = date % 10000 // 100
    day = date % 100
    
    if (month > 12 or month < 1):
        print('#%d -1'%(i))
        continue
    
    if (months[month] < day):
        print('#%d -1'%(i))
        continue
        
    print('#%d %04d/%02d/%02d'%(i, year, month, day))