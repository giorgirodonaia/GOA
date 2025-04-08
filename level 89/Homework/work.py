user_input = input("enter something: ")
user_num = input("enter number: ")
user_num = int(user_num)

print(user_input[user_num:])


x = "Hello World"

print(x[2:6:1])
       #^ ^ ^
 


#პირველი რიცხვი ნიშნავს რომელ ინდექსიდან დაიწყოს სტრინგის ამოჭრა
#მეორე რიცხვი სადამდე ამოჭრას ტრინგი ანუ 6-ამდე 6 არ ითვლება
#მესამე რიცხვი რამდენით გადაადგილდეს ანუ step-ი

def func(sen):
    words = sen.split()
    new_sen = [w[::-1] for w in words]
    return " ".join(new_sen)

print(func("girogi rodonaia"))