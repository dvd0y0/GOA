// # 1
// interface User {
//   name: string;
//   age: number;
//   piano: string;
// }

// let loomi: string = "22";
// let obj: objType = {
//   name: "dtuna",
//   age: 14,
//   piano: "Blanth Electronic Piano",
// };

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.piano);

// # 2
interface Lion {
  a: number;
  b: number;
  c: number;
}

function lomi({ a, b, c }: { a: number; b: number; c: number }) {
  return [a, b, c];
}
const result = lomi({ a: 1, b: 2, c: 3 });
console.log(result);
