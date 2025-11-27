# 1
# class Lomi:
#     simba = "mefe lomi 1"
#     mufasa = "mefe lomi 2"

# new_my_class = Lomi()
# print(new_my_class.simba)

# 2 
# class Lomi:
#     def __init__(self, simba, mufasa):
#      self.simba = simba
#      self.mufasa = mufasa

# new_my_class = Lomi("mefe lomi 1", "mefe lomi 2")
# print(new_my_class.simba)
# print(new_my_class.mufasa)

# 3
class Lomi:
    def __init__(self, simba, mufasa):
     self.simba = simba
     self.mufasa = mufasa

    def __str__(self):
        return f"bubu: {self.simba}, baba: {self.mufasa} "

new_my_class = Lomi("mefe lomi 1", "mefe lomi 2")
print(new_my_class)
