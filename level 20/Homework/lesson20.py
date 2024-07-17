def list(num):
    f_list = []
    for i in num:
        if i % 2 == 0:
            f_list.append(i)
        else:
            pass
    return sum(f_list)
print(list([1,2,3,55,6,4,63,77,88,7]))    
    
def name(n):
    return n[::-1]
print(name("giorgi"))


def factorial(f):
    new_num = 1
    while f > 0:
        new_num = new_num * f
        f = f - 1
    return new_num
print(factorial(5))


def qwe(n,n1):
    my_list = []
    for x in n:
        if x in n1 and x not in my_list:
            my_list.append(x)
    return my_list
print(qwe([1,2,3,44,5],[1,22,3,2,55,7,5]))


def wovels(a):
    numbers = 0
    for i in a:
        if i == "a":
            numbers = numbers + 1
        elif i == "o":
            numbers = numbers + 1
        elif i == "e":
            numbers = numbers + 1
        elif i == "u":
            numbers = numbers + 1
        elif i == "i":
            numbers = numbers + 1
        else:
            pass
    return numbers
print(wovels("giorgi"))
            

def qweqwe(g,g1):
    if len(g) != len(g1):
        return False
    
    sorted1 = sorted(g)
    sorted2 = sorted(g1)

    return sorted1 == sorted2

print(qweqwe("giorgi","giorgi"))


