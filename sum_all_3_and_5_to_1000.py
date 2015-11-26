#sum of all numbers divisble by 3 and 5 till 1000
def sum_all(num):
    sum_num = 0
    
    for i in range(0,num+1):
        if i % 3 == 0 and i % 5 == 0:
            sum_num = sum_num + i

    return sum_num

print sum_all(1000)