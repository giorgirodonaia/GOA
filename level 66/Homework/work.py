#  შექმენით ფუნქცია რომელსაც გადაეცემა მასივი და აბრუნებს მასივს უნიკაკური ეკემენტებით
#   (ის ელემენტები რიმელიც გადმოცემულ მასივში მხოლოდ ერთხელ გვხვდება


# def unique_elements(arr):
#     return [x for x in arr if arr.count(x) == 1]

# print(unique_elements([1,23,33,33]))



# def elem(m):
#     res = []
#     for i in m:
#         if m.count(i) == 1:
#             res.append(i)
#     return res
# print(elem([1,2,2,4]))






def digital_root(n):
    str_num = str(n)
    while len(str_num) != 0 and len(str_num) != 1:
        m = 0
        for num in range(len(str_num)):
            m = m + int(str_num[num])
        str_num = str(m)
    return m
    
print(digital_root(1234))