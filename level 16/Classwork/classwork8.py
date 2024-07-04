names = ["Gigi", "Saba", "Temo", "Andria", "Irakli"]
print(names)
print(names[0])
print(names[2])
print(names[4])


names[0] = "Giorgi"
names[1] = "Luka"
names[3] = "Lasha"


names.append("Giga")

names.pop()
print(names)




cars = []
for i in range(5):
    cars_names=input("Please enter car name: ")
    cars.append(cars_names)
    print(cars)

names = ["Gigi", "Saba", "Temo", "Andria", "Irakli"]

print(names.index("Gigi"))
print(len(names))
print(names.count("Gigi"))




