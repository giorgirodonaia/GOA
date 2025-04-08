var = lambda x: x % 2
print(var(3))

my_set = {2,3,4,5,"qweqwe", True,1}
print(my_set)

my_dict = {
    "name": "giorgi",
    "lastname": "rodonaia",
    "age": 15
}

print(my_dict["name"])
print(my_dict["lastname"])
print(my_dict["age"])

nums = [1,2,3]

var1 = list(map(lambda x: x * 2, nums))
print(var1)

var2 = list(filter(lambda x: x % 3 == 0, nums))
print(var2)

numbers = [5, 12, 18, 15]
var3 = list(filter(lambda x: x % 5 == 0, numbers))
print(var3)

var4 = list(map(lambda x: x + 10, numbers))
print(var4)

var5 = list(filter(lambda x: x % 2 == 0, numbers))
print(var5)

from functools import reduce

var6 = reduce(lambda x,y: x + y, numbers)
print(var6)