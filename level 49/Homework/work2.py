def generate_multiplication_table():
    return [[(i + 1) * (x + 1) for x in range(10)] for i in range(10)]
print(generate_multiplication_table())