# 1
# class Car:
#     def __init__(self, brand, model, year):
#         self.brand = brand
#         self.model = model
#         self.year = year

#     def __str__(self):
#         return f"{self.year} {self.brand} {self.model}"

#     def drive(self):
#         return f"The {self.brand} {self.model} is driving"
#
# my_car = Car("BMW", "X1", 2020)
# print(my_car)
# print(my_car.drive())

# 2
# class Food:
#     def __init__(self, name, calories):
#         self.name = name
#         self.calories = calories

#     def __str__(self):
#         return f"{self.name} ({self.calories} kcal)"

#     def eat(self):
#         return f"You ate {self.name} and got {self.calories} kcal."

# apple = Food("Apple", 80)
# print(apple)
# print(apple.eat())

# 3
# class Napoleon(Food):
# def __init__(self, sweetness):
#     super().__init__("Napoleon Cake", 450)
#     self.sweetness = sweetness

# def describe(self):
#     return f"Napoleon cake with sweetness level {self.sweetness}/10."

# cake = Napoleon(sweetness=9)
# print(cake.describe())
# print(cake.eat())

# 4
# class Perfume:
# def __init__(self, brand, smell):
#     self.brand = brand
#     self.smell = smell

# def __str__(self):
#     return f"{self.brand} perfume ({self.smell})"

# def spray(self):
#     return f"You sprayed {self.brand} ({self.smell}). Smells nice!"

# dior = Perfume("Dior", "Sweet")
# print(dior)
# print(dior.spray())

# 5
# class Person:
# def __init__(self, name, age, fav_perfume=None):
#     self.name = name
#     self.age = age
#     self.fav_perfume = fav_perfume

# def __str__(self):
#     return f"{self.name}, {self.age} years old"

# def greeting(self):
#     return f"Hi {self.name}, you are {self.age} years old!"

# def use_perfume(self):
#     if self.fav_perfume:
#         return self.fav_perfume.spray()
#     return "No perfume selected."

# def eat_food(self, food):
#     return f"{self.name} eats {food.name}. {food.eat()}"

# p = Person("Datuna", 16, fav_perfume=dior)
# print(p)
# print(p.greeting())
# print(p.use_perfume())
# print(p.eat_food(apple))
