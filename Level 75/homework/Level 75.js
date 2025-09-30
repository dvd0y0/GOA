// # 1
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr, 6];
// console.log(newArr);

// # 2
// function mergeArrays(a, b) {
//   let merged = [...a, ...b];
//   console.log(merged);
// }
// mergeArrays([1, 2], [3, 4]);

// # 3
// function sumAll(...numbers) {
//   return numbers.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumAll(1, 2, 3, 4, 5)); 

// # 4
// let arr2 = [10, 20, 30];
// let doubledArr = [...arr2, ...arr2];
// console.log(doubledArr); 

// # 5
// function createUser(name, age, ...info) {
//   console.log({ name, age, info });
// }
// createUser("Gio", 25, "developer", "Tbilisi");

// # 6
// let a1 = [1, 2, 3];
// let a2 = [4, 5, 6];
// let merged = [...a1, ...a2];
// console.log(merged);

// # 7
// function mergeObjects(...objs) {
//   return { ...objs[0], ...objs[1], ...objs[2] };
// }
// console.log(mergeObjects({a:1}, {b:2}, {c:3})); 

// # 8
// function concatStrings(...strings) {
//   return strings.join(" ");
// }
// console.log(concatStrings("გამარჯობა", "მსოფლიო", "!"));

// # 9
// let arr3 = [1,2,3,4,5,6,7,8,9,10];
// let firstFive = [...arr3.slice(0, 5)];
// console.log(firstFive);

// # 10
// function printAll(...args) {
//   args.forEach(arg => console.log(arg));
// }
// printAll("გამარჯობა", 123, true, "JS");

// # 11
// let obj1 = {a: 1, b: 2, c: 3};
// let obj2 = {d: 4, e: 5};
// let mergedObj = {...obj1, ...obj2};
// console.log(mergedObj);

// # 12
// let arr4 = [1,2,3,4,5,6,7,8,9,10];
// let doubled = arr4.map(x => x * 2);
// console.log(doubled);

// # 13
// function mergeManyObjects(...objs) {
//   return objs.reduce((acc, obj) => ({...acc, ...obj}), {});
// }
// console.log(mergeManyObjects({a:1}, {b:2}, {c:3}));

// # 14
// let arr5 = [12, 7, 25];
// function getMax(arr) {
//   return Math.max(...arr);
// }
// console.log(getMax(arr5));

// # 15
// function showUser(firstName, lastName, ...other) {
//   console.log("Name:", firstName, lastName);
//   console.log("Other:", other);
// }
// showUser("Gio", "Met", 25, "Tbilisi");

// # 16
// function extendObject(obj) {
//   return {...obj, active: true, createdAt: Date.now()};
// }
// console.log(extendObject({name: "Ana"}));

// # 17
// let baseObj = {a:1, b:2};
// let extendedObj = {...baseObj, c:3, d:4};
// console.log(extendedObj);

// # 18
// function minMax(...nums) {
//   return {min: Math.min(...nums), max: Math.max(...nums)};
// }
// console.log(minMax(5, 12, 3, 8));

// # 19
// let arr6 = [10,20,30,40,50];
// let everyFourth = arr6.filter((_, index) => (index+1) % 4 === 0);
// console.log([...everyFourth]);

// # 20
// let person = {name: "Gio", age: 25, address: "Tbilisi"};
// let {address, ...onlyNameAge} = person;
// console.log(onlyNameAge); 






















