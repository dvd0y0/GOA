# 1
# class Book:
#     def __init__(self, title, author, pages, price):
#         self.title = title
#         self.author = author
#         self.pages = pages
#         self.price = price

#     def display_info(self):
#         print(f"Title: {self.title}")
#         print(f"Author: {self.author}")
#         print(f"Pages: {self.pages}")
#         print(f"Price: {self.price}₾")


# book1 = Book("Python Basics", "John Smith", 250, 30)
# book1.display_info()

# 2
# class Calculator:
#     def add(self, a, b):
#         return a + b

#     def subtract(self, a, b):
#         return a - b

#     def multiply(self, a, b):
#         return a * b

#     def divide(self, a, b):
#         if b == 0:
#             return "Error: Division by zero!"
#         return a / b


# calc = Calculator()

# print("Add:", calc.add(10, 5))
# print("Subtract:", calc.subtract(10, 5))
# print("Multiply:", calc.multiply(10, 5))
# print("Divide:", calc.divide(10, 5))

# 3
# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def greet(self):
#         print(f"Hello, I am {self.name} and I am {self.age} years old.")


# class Employee(Person):
#     def __init__(self, name, age, salary):
#         super().__init__(name, age)
#         self.salary = salary

#     def work(self):
#         print(f"I work as an employee and my salary is {self.salary}₾.")


# emp = Employee("Davit", 25, 1500)
# emp.greet()
# emp.work()

# 4
# class Shape:
#     def area(self):
#         raise NotImplementedError("area() must be implemented in subclasses")


# class Rectangle(Shape):
#     def __init__(self, width, height):
#         self.width = width
#         self.height = height

#     def area(self):
#         return self.width * self.height


# rect = Rectangle(5, 10)
# print("Rectangle area:", rect.area())

# 5
# class Car:
#     def __init__(self, brand, model, year, mileage):
#         self.brand = brand
#         self.model = model
#         self.year = year
#         self.mileage = mileage

#     def display_info(self):
#         print(f"Brand: {self.brand}")
#         print(f"Model: {self.model}")
#         print(f"Year: {self.year}")
#         print(f"Mileage: {self.mileage} km")

#     def drive(self, distance):
#         if distance < 0:
#             print("Distance cannot be negative!")
#         else:
#             self.mileage += distance
#             print(f"The car has driven {distance} km.")
