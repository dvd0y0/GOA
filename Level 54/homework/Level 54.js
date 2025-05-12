// # 1
// let password = 'Group 41 is best';

// function guessPassword() {
//     let attempts = 3;
//     let i = 0;

//     while (i < attempts) {
//         let userGuess = prompt('Enter the password:');

//         if (userGuess === password) {
//             alert('თქვენი შეყვანილი პაროლი სწორია');
//             return;
//         } else {
//             attempts--;
//             alert(`არასწორი პაროლი. დარჩენილი ცდების რაოდენობა: ${attempts}`);
//         }
//         i++;
//     }
//     alert('თქვენ ამოგეწურათ ცდების რაოდენობა');
// }
// guessPassword();

// # 2
// function factorial(N) {
//     let result = 1;
//     for (let i = 1; i <= N; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5)); 

// # 3
// function countdown() {
//     let i = 100;
//     while (i >= 0) {
//         console.log(`დარჩენილია ${i} წამი`);
//         i--;
//     }
// }

// countdown();

// # 4
// let i = 1;
// while (i <= 20) {
//     if (i !== 7 && i !== 13) {
//         console.log(i);
//     }
//     i++;
// }

// # 5
// let i = 1;
// while (i <= 30) {
//     if (i % 2 !== 0) {
//         i++;
//         continue;
//     }

//     console.log(i);
//     if (i % 8 === 0) {
//         break;
//     }
//     i++;
// }

// # 6
// let i = 1;
// while (i <= 30) {
//     if (i % 5 === 0) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }