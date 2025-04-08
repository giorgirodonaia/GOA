l = [1,2,3,4,5,6,7,12,24,36]

x = list(filter(lambda x: x % 12 == 0, l))
print(x)