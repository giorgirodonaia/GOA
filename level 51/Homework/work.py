def myfunction(a): 
    result1 = []
    result2 = []
    for i in range(len(a)):
        result3= [] 
        result3.append(i)
        result1.append(result3)
        for j in range(len(a[i])):
            result4 = []
            result4.append(j)
            result2.append(result4)


    print(result1)
    print(result2)

myfunction([[1,2], 
            [1,2]])