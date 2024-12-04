# 1. სიტყვის რიცხვი ტექსტში
# შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და გამოითვლის, რამდენი სიტყვაა ამ ტექსტში.

# def word_count(text):

#     words = text.split()
#     # ვითვლით, რამდენი სიტყვაა
#     return len(words)


# text = input("შეიყვანეთ ტექსტი: ")
# print(f"სიტყვების რაოდენობა ტექსტში: {word_count(text)}")


# 2. პირობითი ოპერაცია რიცხვის დადებითობის შემოწმებისთვის
# შექმენი პროგრამა, რომელიც იფუნქციონირებს შემდეგნაირად: მომხმარებლის შეყვანილი რიცხვი იქნება დადებითი, უარყოფითი, ან ნულოვანი, და შესაბამისი შეტყობინება უნდა გამოიტანოს.


# def check_number(num):
#     if num > 0:
#         return "რიცხვი დადებითია"
#     elif num < 0:
#         return "რიცხვი უარყოფითია"
#     else:
#         return "რიცხვი არი ნული"
    
# num = float(input("შეიყვანეთ თქვენი რიცხვი:"))

# print(check_number(num))


# # 3. მომხმარებლის ასაკის კატეგორიზაცია
# შექმენი პროგრამა, რომელიც მიიღებს მომხმარებლის ასაკს და დააბრუნებს შეტყობინებას იმის მიხედვით, თუ რომელ ასაკობრივ კატეგორიაშია მომხმარებელი.


# def Categorize_Age(Age):
#     if Age < 13:
#         return "kid"
#     elif 13 <= Age < 18:
#         return "Tinage"
#     elif 18 <= Age < 65:
#         return "aduti"
#     else:
#         return "Old"
    
# Age = int(input("შეიყვანეთ თქვენი ასაკი: "))

# print(f"თქვენ ხართ: {Categorize_Age(Age)}")


# # 4. ლუწი და კენტ რიცხვთა სიის პოვნა
# შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას და დააბრუნებს ორ ცალკე სიას – ერთში იქნებიან ლუწი რიცხვები, ხოლო მეორეში კენტი რიცხვები.


# def separate_even_odd(numbers):
#     even_numbers = [];  
#     odd_numbers = [];   
    
#     for num in numbers:
#         if num % 2 == 0: 
#             even_numbers.append(num)
#         else:  
#             odd_numbers.append(num)
    
#     return even_numbers, odd_numbers


# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# evens, odds = separate_even_odd(numbers)
# print(f"ლუწი რიცხვები: {evens}")
# print(f"კენტი რიცხვები: {odds}")


# # 5. საშუალო რიცხვის პოვნა ფუნქციით
# შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას და დააბრუნებს სიის საშუალო რიცხვს.


# def find_avarage(numbers):
#     if len(numbers) == 0:
#         return 0
#     return sum(numbers) / len(numbers)
 
# numbers = [10, 20, 30, 40, 50]
# average = find_avarage(numbers)
# print(f"სიის საშუალო რიცხვი: {average}")
