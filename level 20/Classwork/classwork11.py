def greet(): #def - ფუნქციის შექმნა. greet - ფუნქციის სახელი
    print('Hello Gio')
greet()

def add(): #def - ფუნქციის შექმნა. add - ფუნქციის სახელი
    print(11+11)
add()
# ფუნქცია შეგვიძლი გამოვიძახოთ რამდენ ჯერაც გვინდა იმდენჯერ


def add1(num1,num2,operation): #def - ფუნქციის შექმნა. add1 - ფუნქციის სახელი. ფუნქციაშო შევქმენი სამი ცვლადი num1,num2,operation - ეს ცვლადები არის პარამეტრები
    if operation == "+": #თუ ოპერაციის ცვალიდის მნიშვნელობა უდრის "+"
        print(num1 + num2) #num1 და num2 ცვალადის მნიშვნელობების მიმატება
    elif operation == "-": #თუ ოპერაციის ცვალიდის მნიშვნელობა უდრის "-"
        print(num1 - num2) #num1 და num2 ცვალადის მნიშვნელობების გამოკლება
    elif operation == "*": #თუ ოპერაციის ცვალიდის მნიშვნელობა უდრის "*"
        print(num1 * num2) #num1 და num2 ცვალადის მნიშვნელობების გამრავლება
    elif operation == "/": #თუ ოპერაციის ცვალიდის მნიშვნელობა უდრის "/"
        print(num1 / num2) #num1 და num2 ცვალადის მნიშვნელობების გაყოფა
    else:                  #სხვა შემთხვავაში ამოიტანოს ერორი
        print("ERROR") 

add1(2,3,"+")    #num1 = 2, num2 = 3, operattion = "+"




def add2(num1,num2,operation):
    result = 0
    if operation == "+": 
        result = (num1 + num2) 
    elif operation == "-": 
        result = (num1 - num2) 
    elif operation == "*": 
        result = (num1 * num2) 
    elif operation == "/": 
        result = (num1 / num2) 
    else:                  
        result = ("ERROR")
    return result

print(add2(2,3,"+"))


def even(a):
    new_list = []
    for i in a:
       if i % 2 == 0:
           new_list.append(i)
       else:
           pass
    return new_list

print(even([1,2,3,4,5,6,7]))

    