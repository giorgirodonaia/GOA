#upper() - ყველა ასოს სტრნიგში გადაქმნის დიდ ასოდ
#lower() - ყველა ასოს სტრინგში დადაქმნის პატარა ასოდ
#capitalize() - სტრინგში პირველ ასიოს გადაქმნის დიდ ასოდ
#dot natation - ფუნქციის გამოძახების მეთოდი(მაგალითად name.append())


name = "giorgi"
print(name.upper())
name1 = "GIORGI"
print(name1.lower())
print(name.capitalize())

#append() - სიაში ბოლოს ამატებს ელემენტს
#pop() - სიაში ინდექსის დახმარებით შლის ელემენტს სიაში
#insert() - სიაში ამატებს ელემენტს ინდექსის დახმარებიტ ნებისმიერ პოზიციაზე

food = ['xinkali', 'xachapuri']
food.append('puri')
print(food)
food.pop(0)
print(food)
food.insert(0, 'yveli')
print(food)

cars = ['BMW', 'Mercedes']
cars.append('Honda')
print(cars)
cars.pop(1)
print(cars)
cars.insert(2, 'Ferrari')
print(cars)

names = ['Giorgi', 'Temo']
names.append('Saba')
print(names)
names.pop(2)
print(names)
names.insert(0, 'Irakli')
print(names)