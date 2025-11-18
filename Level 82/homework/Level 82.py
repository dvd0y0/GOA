# 1
name = "dato"
print(type(name))

# 2
fruits = ["apple", "banana", "orange"]
print(fruits[1])

# 3
student = {"name": "Gio", "age": 15, "grade": "A"}
print(student["grade"])

# 4
colors = ("red", "green", "blue")
print()

# 5
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1 | set2)  
print(set1 & set2) 

# 6
x = 10
x += 5
x *= 2
print(x)

# 7
y = 8
y += 4
y *= 2
print(y)

# 8
a = 10
b = 20
print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= b)
print(a <= b)

# 9
num = int(input("Enter number: "))
if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")

# 10
age = int(input("Enter age: "))
if age > 18 and age < 60:
    print("Adult")

# 11
n = int(input("Enter number: "))
if (10 < n < 20) or (n == 50):
    print("Valid number")
else:
    print("Not valid")

# 12
a = [1, 2, 3]
b = a
print(a is b)
print(a == b)

c = [1, 2, 3]
print(a is c)
print(a == c)

# 13
nums = [2, 4, 6, 8]
print(4 in nums)
print(5 in nums)
print(5 not in nums)

# 14
print(5 & 3)
print(5 | 3)
print(5 ^ 3)
print(~5)
print(5 << 1)
print(5 >> 1)

# 15
num = 16
num >>= 1
print(num)
num <<= 2
print(num)

# 16
a = int(input("Enter number A: "))
b = int(input("Enter number B: "))

print("Sum:", a + b)
print("Difference:", a - b)

print("A > B:", a > b)
print("A < B:", a < b)
print("A == B:", a == b)

print("Bitwise AND:", a & b)

# 17
data = ["hello", 42, 3.14, True, 5 + 2j]

for item in data:
    print(item, "=>", type(item))
