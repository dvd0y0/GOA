// #1
// function Car(name, turbo, age, color, engine) {
//     this.name = name;
//     this.turbo = turbo;
//     this.age = age;
//     this.color = color;
//     this.engine = engine;
// }

// const myCar = new Car("Toyota", true, 3, "Red", "V8");
// console.log("ერთი მანქანა:", myCar);

// #2
// const cars = [
//     new Car("BMW", true, 2, "Black", "V6"),
//     new Car("Mercedes", false, 5, "White", "V8"),
//     new Car("Toyota", true, 3, "Red", "V8"),
//     new Car("Kia", false, 7, "Blue", "I4"),
//     new Car("Audi", true, 1, "Gray", "V6")
// ];

// console.log("ყველა მანქანა:", cars);

// #3
// console.log("სახელი და ფერი:");
// cars.forEach(car => {
//     console.log(car.name, "-", car.color);
// });

// #4
// const turboCars = cars.filter(car => car.turbo === true);
// console.log("ტურბო მანქანები:", turboCars);

// #5
// const simpleCars = cars.map(car => ({
//     name: car.name,
//     engine: car.engine
// }));
// console.log("მარტივი ვერსია (name და engine):", simpleCars);
