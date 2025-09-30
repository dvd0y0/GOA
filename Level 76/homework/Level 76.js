// # 1
// class Person {
//   constructor(name, age, city, profession) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.profession = profession;
//   }
// }

// let person1 = new Person("გიორგი", 25, "თბილისი", "პროგრამისტი");
// let person2 = new Person("ანა", 30, "ბათუმი", "მასწავლებელი");

// console.log(person1);
// console.log(person2);

// # 2
// class LocationInfo {
//   constructor(city, country, interests) {
//     this.city = city;
//     this.country = country;
//     this.interests = interests;
//   }
// }

// let loc1 = new LocationInfo("თბილისი", "საქართველო", "კოდირება");
// let loc2 = new LocationInfo("ბერლინი", "გერმანია", "მოგზაურობა");

// console.log(loc1);
// console.log(loc2);

// # 3
// class User {
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }

//   getName() {
//     return this.name;
//   }

//   showAge() {
//     console.log(`ასაკი: ${this.age}`);
//   }

//   get description() {
//     return `${this.name}, ${this.age} წლის, ქალაქი: ${this.city}`;
//   }
// }

// let u1 = new User("თამარი", 22, "ქუთაისი");
// console.log(u1.getName());  
// u1.showAge();               
// console.log(u1.description); 

// # 4
// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   get info() {
//     return { brand: this.brand, model: this.model, year: this.year };
//   }
// }

// let car1 = new Car("Toyota", "Camry", 2020);
// console.log(car1.info);

// # 5
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   set updatePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// let p1 = new Product("Laptop", 1200);
// console.log(p1);

// p1.updatePrice = 900; 
// console.log(p1);

// # 6
// class Citizen {
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }

//   getName() {
//     return this.name;
//   }

//   getAge() {
//     return this.age;
//   }

//   getCity() {
//     return this.city;
//   }

//   fullInfo() {
//     return `${this.name}, ${this.age} წლის, ცხოვრობს ${this.city}-ში.`;
//   }
// }

// let c1 = new Citizen("ნიკა", 28, "რუსთავი");
// console.log(c1.fullInfo());

// # 7
// class Data {
//   constructor(num, str) {
//     this.num = num;
//     this.str = str;
//   }

//   get details() {
//     return `რიცხვი: ${this.num}, ტექსტი: ${this.str}`;
//   }
// }

// let d1 = new Data(42, "გამარჯობა");
// console.log(d1.details);

// # 8
// class Human {
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }

//   showInfo() {
//     return `${this.name}, ${this.age} წლის, ქალაქი: ${this.city}`;
//   }

//   changeCity(newCity) {
//     this.city = newCity;
//   }
// }

// let h1 = new Human("მარიამი", 27, "ქუთაისი");
// console.log(h1.showInfo());

// h1.changeCity("თბილისი");
// console.log(h1.showInfo());
