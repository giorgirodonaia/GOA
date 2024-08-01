def homework(string):
    words = string.split()
    longer_word = ""
    for word in words:
        if len(word) > len(longer_word):
            longer_word = word
        else:
            pass
    return list(longer_word)
print(homework("giorgi rodonaia"))


def sum_or_zero(numbers):
    result_list = []
    for number in numbers:
        if number % 2 == 0:
            result_list.append(number * number)
        else:
            result_list.append(number * 2)
    return result_list
print(sum_or_zero([2,3,4,5,77]))