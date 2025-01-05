# 1

# def even_numbers(arr, n):

#     even_nums = [num for num in arr if num % 2 == 0]

#     return even_nums[-n:]

# 2

# def sum_of_n(n):

#     result = []

#     for i in range(abs(n) + 1):

#         term = (i * (i + 1)) // 2 

#         result.append(term if n >= 0 else -term)
#     return result