let string: string = "ეს არის სტრინგ ტიპის ცვლადი";

let name: string = "გიორგი";
let age: number = 25;
let isStudent: boolean = true;

function greet(person: string, years: number): string {
  return `გამარჯობა, ${person}! შენ ხარ ${years} წლის.`;
}

console.log(greet(name, age));
console.log(`სტუდენტია: ${isStudent}`);
