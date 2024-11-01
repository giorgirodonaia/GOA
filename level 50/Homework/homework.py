def numbers(nums1, nums2):
    result = []

    for i in range(len(nums1)):
        row_sum = []

        for j in range(len(nums1[i])):
            element_sum = nums1[i][j] + nums2[i][j]
            row_sum.append(element_sum)

        result.append(row_sum)

    print(result)

numbers([[1, 3], [1, 4]], [[4, 1], [2, 2]])



def transpose_matrix(num):
    result = []

    num_columns = len(num[0])

    for i in range(num_columns):
        new_row = []

        for j in range(len(num)):
            new_row.append(num[j][i])

        result.append(new_row)

    print(result)

transpose_matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])



def diagonal_sums(num):
    primary_diagonal_sum = 0
    secondary_diagonal_sum = 0

    n = len(num)

    for i in range(n):
        primary_diagonal_element = num[i][i]
        primary_diagonal_sum += primary_diagonal_element

        secondary_diagonal_element = num[i][n - 1 - i]
        secondary_diagonal_sum += secondary_diagonal_element

    print(primary_diagonal_sum, secondary_diagonal_sum)

diagonal_sums([[1, 2, 3], [4, 5, 6], [7, 8, 9]])