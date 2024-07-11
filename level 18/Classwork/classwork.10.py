nums = [1, 3, 5, 7, 5, 8, 11, 30, 4, 3]
print(nums)
print(nums[0:5])
print(nums[7:])
print(nums[0:10:2])
print(nums[2:7])
print(nums[:5])
print(nums[5:])
print(nums[1:9])
print(nums[1:8:2])


name = "Giorgi"
print(name)
print(name[3:])
print(name[::-1])
print(name[::-1][::2])
new_list = name[1::2]
print(new_list)
print(name)



numbers = [2, 4, 3, 2, 4, 6, 7, 87, 54.]
#clear მეთოდის დახმარებით ვასუფთავებ სიას
numbers.clear()

print(numbers)
#სლაისისის მიხედვით დავაკოპირე სია
num1 = [66, 77, 32]
num2 = num1[:]

print(num1)
print(num2)
#copy მეთოდის დახმარებით დავაკოპირე სია
num3 = num1.copy()

print(num3)
#შევამოწმე რომ ეს მეთოდი არ არის სწორი თუ დაკოპირება გვჩირდევბა
num3 = num1
num1[0] = "giorgi"
print(num3)
print(num1)



names1 = ["Giorgi", "Gigi", "Giga"]
names2 = ["Luka", "Lile", "Lika"]

names1.extend(names2)
print(names1)

names1.insert(0, "Giga")