interface User {
  id: number;
  username: string;
  email: string;
  isAdmin?: boolean;
}

function registerUser(user: User): void {
  console.log(`მომხმარებელი ${user.username} წარმატებით დარეგისტრირდა`);
}

const user1: User = {
  id: 1,
  username: "giorgi123",
  email: "giorgi@example.com",
  isAdmin: true
};

registerUser(user1);


interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  { id: 1, name: "ლეპტოპი", price: 2500, category: "electronics" },
  { id: 2, name: "წიგნი", price: 35, category: "books" },
  { id: 3, name: "ტელეფონი", price: 1200, category: "electronics" },
  { id: 4, name: "ყურსასმენი", price: 150, category: "electronics" },
  { id: 5, name: "ბლოკნოტი", price: 15, category: "stationery" },
];

function filterByCategory(products: Product[], category: string): Product[] {
  return products.filter(product => product.category === category);
}

console.log(filterByCategory(products, "electronics"));

enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  VIEWER = "VIEWER"
}

function checkPermission(role: UserRole): string {
  switch (role) {
    case UserRole.ADMIN:
      return "You have full access";
    case UserRole.EDITOR:
      return "You can edit content";
    case UserRole.VIEWER:
      return "You can only view content";
    default:
      return "Unknown role";
  }
}

console.log(checkPermission(UserRole.ADMIN));
console.log(checkPermission(UserRole.VIEWER));


function formatInput(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * input;
  }
}

console.log(formatInput("hello"));
console.log(formatInput(7));


interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  department: string;
}

type StaffMember = Person & Employee;

const staff: StaffMember = {
  name: "ანა გოგიაშვილი",
  age: 28,
  employeeId: "EMP-4567",
  department: "IT"
};

console.log(staff);


function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

const numbers = [10, 20, 30];
const names = ["გიო", "მარი", "ნიკა"];

console.log(getFirstElement(numbers));
console.log(getFirstElement(names));

type Point = readonly [number, number];

const point: Point = [10, 25];

console.log("Point:", point);

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

function updateTask(id: number, updates: Partial<Task>): void {
  console.log(`Task ${id} განახლდა შემდეგი ცვლილებებით:`, updates);
}

// მაგალითი:
updateTask(5, {
  title: "ახალი სათაური",
  completed: true
});

updateTask(10, {
  description: "განახლებული აღწერა"
});
