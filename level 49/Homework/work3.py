def pairs(num):
    for i in range(1, num + 1):
        for x in range(i + 1, num + 1):
            print(f"({i}, {x})")
pairs(5)