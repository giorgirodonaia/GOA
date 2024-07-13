num = 5

# print(True and True) # True
# print(True and False) # False
# print(False and True) # False
# print(False and False) # False 

# print(True or True) # True
# print(True or False) # True
# print(False or True) # True
# print(False or False) # False

print("----------- AND -----------")

print(num >= 1 and num <= 10) # True
print(num >= 1 and num <= 4) # False
print(num > 5 and num <= 10) # False
print(num > 5 and num > 10) # False

print("----------- OR -----------")

print(num >= 1 or num <= 10) # True
print(num >= 1 or num <= 4) # True
print(num > 5 or num <= 10) # True
print(num > 5 or num > 10) # False

#როცა ვიყენებთ ლოგიკურ ოპერატორ and-ს ორივე მხარეს უბდა იყოს სწორი შედარება მაშინ გამოგვიტანს ტერმინალში True-ს, და თუ ერთ მხარეს არ არის სწორი შედარება გამოგვიტანს False-ს
#როცა ვიყენებთ ლოგიკურ ოპერატორ or-ს ერთ მხარეს მაინც უნდა იყოს სწორი შედარება მაშინ გამოგვიტანს ტერმინალში True-ს, და თუ ურივე მხარეს არის არასწორი შედარება ტერმინალში გამოგვიტანს False-s

print("----------- AND -----------")

print(True and True)
print(True and False)
print(False and True)
print(False and False)

print("----------- OR -----------")

print(True or True)
print(True or False)
print(False or True)
print(False or False)







num1 = 17
num2 = 20

print(num1 < num2)
print(num1 > num2)
print(num1 <= num2)
print(num1 >= num2)
print(num1 == num2)