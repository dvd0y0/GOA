// # 1
// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }

// let year = parseInt(prompt("Enter a year: "));
// if (isLeapYear(year)) {
//   alert(`${year} is a leap year.`);
// } else {
//   alert(`${year} is not a leap year.`);
// }

// # 2
// function choosePayer(names) {
//   let chosen_one = names[Math.floor(Math.random() * names.length)];
//   return `${chosen_one} will pay for everyone's food!`;
// }

// # 3
// function fizzBuzz(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       result.push("Fizz");
//     } else if (i % 5 === 0) {
//       result.push("Buzz");
//     } else {
//       result.push(i);
//     }
//   }
//   return result;
// }