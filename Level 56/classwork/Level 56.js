// # 1 (js)
// function smallEnough(a, limit) {
//     let i = 0;
//     while (i < a.length) {
//         if (a[i] > limit) {
//             return false;
//         }
//         i++;
//     }
//     return true;
// }

// # 1 (py)
// def small_enough(array, limit):
//     i = 0
//     while i < len(array):
//         if array[i] > limit:
//             return False
//         i += 1
//     return True

// # 2 (py)
// def replace_exclamation(st):
//     result = ""
//     i = 0
//     vowels = "aeiouAEIOU"
//     while i < len(st):
//         if st[i] in vowels:
//             result += "!"
//         else:
//             result += st[i]
//         i += 1
//     return result