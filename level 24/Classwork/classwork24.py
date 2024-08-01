def list(n):
    f_list = []
    for i in n:
        if i % 2 == 0:
            f_list.append(i)
        else:
            pass
        f_list.append(i)
    return f_list



def string_func(string_list):
    res_list = [] #ცვლადი

    for string in string_list: #ფორ ციკლის საშუალებლით ვაბუნებთ ჩვენ string_list
        if len(string) <= 4:  #თუ სტრინგი შეიცავს 4 ან ნაკლებ სიმბოლოს
            res_list.append(string) # უნდა დავამატოთ rel_lsit ცვლადში

    return res_list 

print(string_func(["hello", "goa", "123", "david", "func", "salkdmfnsdf"]))

print(list([1,3,5,4,5,6]))

def my_list(number_list):
    integer_list = []
    for num in range(integer_list):
        if type(num) == int:
             integer_list.append(num)
        
    return integer_list
print(my_list([1, 4, 5, 4, 3, 3.3, 5.4]))
    
    
    


    