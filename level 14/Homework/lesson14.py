for i in range(0, 20 + 1):
    print(i)



for i in range(1, 10 + 1):
    print(i)



for i in range(2, 100 +1, 2):
    print(i)

for i in range(1, 100, 2):
    print(i)


num = int(input("please enter a number: "))
sum = 0

for i in range(1, num + 1):
    sum += i
    print(i)



for i in range(5, 50 + 1, 5):
    print(i)    



num0 = 0
while num0 < 20:
    print(num0)
    num0 = num0 + 2 



num1 = 1
sum0 = 0
while num1 <= 20:
    print(num1)
    sum0 = sum0 + num1
    num1 = num1 + 1


correct_number = "7"
user_number = input("plese choose number 1-10: ")
while user_number != correct_number:
    print("you lose")
    user_number = input("plese choose number 1-10: ")
print("you won!")
        



password = "password123" 
entered_password = input("Enter the password: ") 
while entered_password != password: 
    print("Incorrect password. Try again.") 
    entered_password = input("Enter the password: ") 
print("Access granted!")         





time = int(input("enter time: "))
if time < 12:
    print("Good morning!")
else:
    print("goood afternoon!")



num2 = int(input("Enter any number to test whether it is odd or even: "))
if num2 % 2 == 0 :
    print("The number is even")
else:
    print("This number is odd")




temperature = int(input("enter the temperature: "))
if temperature < 30:
    print("It's not too hot")
else:
    print("It's hot outside!")




user_points = int(input("Please enter your points: "))
if user_points >= 50:
    print("You passed!")
else:
    print("You failed.")





user_age = int(input("enter your age: "))
if user_age <= 19:
    print("You are a teenager!")
else:
    print("You are not a teenager.")




for i in range(1, 50 + 1,):
    print(i)




nums = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
for i in nums:
    print(i)




squared = []


for i in nums:
    squared.append (i*i)
    print("The square of", i, "of", squared)



factorial = 1
number = int(input("enter a number: "))
for i in range(1, number + 1):
    factorial = factorial * i
    print(factorial)



for i in range(3, 100, 3):
    print(i)

for i in range(5, 100 +1, 5):
    print(i)



usernum = int(input("enter a number: "))
if usernum < 0:
    print("negative")
elif usernum > 0:
    print("possitive")
else:
    print("zero")


