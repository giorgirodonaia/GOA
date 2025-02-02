def sum_digits(n):
    strNum = str(n)
    result = 0
    for i in range(len(strNum)):
        result += int(strNum[i])
    return result

print(sum_digits(22))


def sum_two_largest(lst):
    res = 0
    if len(lst) < 2:
        return None
    
    
    max1 = max(lst)
    res += max1
    lst.remove(max1)
    max2 = max(lst)
    res += max2
    
    return res
    
    
print(sum_two_largest([1,2,3,4,5,10]))