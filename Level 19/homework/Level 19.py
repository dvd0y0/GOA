#1

def simple_calculator(num1, num2, operation):
    num1 = int(input("Enter number 1: "))

    print("1. + ") 
    print("1. - ")
    print("1. * ") 
    print("1. / ")
    operation = int(input("Choose operation (1/2/3/4): "))

    num1 = int(input("Enter number 2: "))

    if operation == 1:
        print(num1 + num2)
    elif operation == 2:
        print(num1 - num2)
    elif operation == 3:
        print(num1 * num2)
    elif operation == 4:
        print(num1 / num2)
        if num2 == 0:
            return "ნულზე გაუოფე შეუძლებელია"
        print(num1 / num2)
        
print(simple_calculator(1,2,3))
        


    



#2

def calculate_area(lenght, width):
    return lenght * width
print(calculate_area(10, 5))

#3

def find_max(num1, num2):
    return max(num1, num2)
print(find_max(15, 20))

#4


def check(num):
    if num % 2 == 0:
        return "რიცხვი ლუწია"
    else:
        return "რიცხვი კენტია"
print(check(12))
print(check(11))
