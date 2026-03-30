// # 1
// export function evenOrOdd(n: number): string {
//   return n % 2 === 0 ? "Even" : "Odd";
// }

// # 2
// export class Kata {
//   static getCount(str: string): number {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     let count = 0;

//     for (const char of str) {
//       if (vowels.has(char)) {
//         count++;
//       }
//     }

//     return count;
//   }
// }

// # 3
// export class Kata {
//     static highAndLow(numbers: string): string {
//         const nums = numbers
//             .split(' ')
//             .map(n => Number(n));

//         const highest = Math.max(...nums);
//         const lowest = Math.min(...nums);

//         return `${highest} ${lowest}`;
//     }
// }
//
// # 4
// export function squareSum(numbers: number[]): number {
//     return numbers
//         .map(n => n * n)
//         .reduce((sum, n) => sum + n, 0);
// }

// # 5
// export function findSmallestInt(args: number[]): number {
//     return Math.min(...args);
// }
