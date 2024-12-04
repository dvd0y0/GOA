#1
def sum(x, y):
    print(x + y)
    print(x - y)
    print(x * y)
    print(x // y)

sum(100, 200)

#2


def inf(name):
    print("გამარჯობა" + name + "კეთილი იყოს შენი მობრძანება,  გისურვებ წარმატებას და წინ სვლას")

inf("dato")


#3

def inf(name, zRva, ):
    print("საყვარელო" + name + "შენი თვალის ფერი ცისფერი" + zRva + "ლამაზია")

inf("ტასო", "ზღვასავით",  )

#4



def about_me(name, last_name, age, country, city):
    return f"მე ვარ {name} {last_name}, {age} წლის. ვცხოვრობ {country}-ში, ქალაქ {city}-ში. ჩემი საყვარელი ჰობია"

print(about_me("დავითი", "მეცხოვრიშვილი", 13, "საქართველო", "თბილისი" ))

#5


def calculate_area(lenght, width):
    return lenght * width
print(calculate_area(10, 5))

#6


def find_max(num1, num2):
    return max(num1, num2)
print(find_max(15, 20))

#7


def check(num):
    if num % 2 == 0:
        return "რიცხვი ლუწია"
    else:
        return "რიცხვი კენტია"
print(check(12))
print(check(11))
