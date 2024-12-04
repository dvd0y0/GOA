def simple_calculator(num1, num2, operation):
    num1 = int(input("Enter number 1: "))

    print("1. + ") 
    print("2. - ")
    print("3. * ") 
    print("4. / ")
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