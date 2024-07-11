nums = [2, 1, 4, 33, 5, 5]
print(nums)
nums.append(77)
print(nums)

nums1 = nums.copy()
print(nums1)

print(nums.count(5))

nums2 = (2, 3, 44)
nums.extend(nums2)
print(nums)


print(nums.index(44))


nums.insert(5, 11)
print(nums)



nums.pop(0)
print(nums)



nums.clear()
print(nums)





names = ["Giorgi", "Gigi", "Megi", "Saba"]
print(names)
names.append("Irakli")
print(names)


names1 = names.copy()
print(names1)


names2 = ["Gaga", "Giga", "Nikoloz"]
names.extend(names2)
print(names)

print(names.count("Irakli"))


print(names.index("Megi"))


names.insert(3, "Temo")
print(names)


names.pop(1)
print(names)


names.clear()
print(names)



cars = ["Mercedes", "BMW", "Mitsubishi", "Subaru"]
print(cars)
cars.append("Ferarri")
print(cars)


cars1 = cars.copy()
print(cars)


cars2 = ["Lamborgini", "Honda", "Toyota"]
cars.extend(cars2)
print(cars)


print(cars.count("Lamborgini"))


print(cars.index("Honda"))

cars.insert(4, "Lexus")
print(cars)


cars.pop(7)
print(cars)


cars.clear()
print(cars)





fruits = ['apple', 'banana', 'orange']
print(fruits)
fruits.append("cherry")
print(fruits)



fruits1 = fruits.copy()
print(fruits1)

fruits2 = ['pear', 'pineaple']
fruits.extend(fruits2)
print(fruits)


print(fruits.count("apple"))


print(fruits.index('apple'))


fruits.insert(2, 'peach')
print(fruits)


fruits.pop(1)
print(fruits)


fruits.clear()
print(fruits)



foods = ['bread', 'cheese',' meat']
print(foods)
foods.append('pizza')
print(foods)


foods1 = foods.copy()
print(foods1)


foods2 = ['burgers', 'oil']
foods.extend(foods2)
print(foods)


print(foods.count('oil'))


print(foods.index('bread'))



foods.insert(5, 'hotdog')
print(foods)


foods.pop()
print(foods)


foods.clear()
print(foods)