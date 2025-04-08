
func = lambda x: f"Hello {x}"
print(func(input()))

nums = [1,2,3,4,5]
func1 = list(map(lambda x: x*2, nums))
print(func1)

listn = [1,3,5,6,7,10,15,21,25.5,30,101,105]
func2 = list(filter(lambda x: x%5 == 0, listn))
print(func2)

setn = {"Goa", "Novatori", "Stem", 123, True, 1, False, 0}
print(setn)
# 1 და 0 იმიტომ არ გამოვა რომ ჩვენ ვქმნით სეტს რომელიც ავტომატურად აცილებს დუბლიკატებს, 
# და ჩვენ როგორც ვიცით  False არის 0 ეკვივალენტი და True არის 1 ეკვივალენტი.