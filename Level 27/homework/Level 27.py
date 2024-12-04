# List Functions and Methods
# Create a list named numbers that contains the following integers: 10, 20, 30, 40, 50, 60, 70, 80, 90.
# Use the append() function to add the number 100 to the end of the list.
# Use the insert() function to add the number 5 at the beginning of the list.
# Use the remove() function to remove the number 30 from the list.
# Use the reverse() function to reverse the order of the list.
# Use the index() function to find the index of the number 50.
# Use the count() function to count how many times 20 appears in the list.
# #Basic List Operations
# Create a list named fruits that contains the following items: "apple", "banana", "cherry", "date", and "elderberry".
# Print the entire list.
# Access and print the first and last items in the list.
# Add a new fruit "fig" to the list.
# Remove "banana" from the list.
# Change the value of the second item to "blueberry".
# Print the length of the list.

# 1

numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
# print (numbers)

# 2

numbers.append(100)

# 3

numbers.insert(0,5)

# 4

numbers.remove(30)

# 5

numbers.reverse()

# 6

index_of_50 = numbers.index(50)

# 7

count_of_20 = numbers.count(20)

# Basic List Operations

# 1

fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# 2

print (fruits)

# 3

print(fruits[0]) 
print(fruits[4]) 

# 4 

fruits.append("fig")

# 5

fruits.remove("banana")

# 6

fruits [1] = "blueuerry"

# 7

print(len(fruits))