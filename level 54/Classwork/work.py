import math

def get_arr(a, b="undefined", c="undefined"):
    if b == "undefined" and c == "undefined":
        print( 3.14 * (a ** 2))    
    
    if c == "undefined":
        print( a * b)

    else:
        # Calculate the semi perimeter
        s = (a + b + c) / 2

        # Calculate the area using Heron's formula
        area = math.sqrt(s * (s - a) * (s - b) * (s - c)) 
        print( area)
        
get_arr(1,2)