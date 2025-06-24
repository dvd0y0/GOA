// #1
// function modifyArray() {
//   const numsArray = [1, 2, 3, 4];
//   const strArray = ["apple", "banana", "cherry"];
//   console.log("numsArray:", numsArray);
//   console.log("strArray:", strArray);

//   let combinedArray = numsArray.concat(strArray);
//   console.log("After concat (combinedArray):", combinedArray);

//   combinedArray.copyWithin(4, 0, 3);
//   console.log("After copyWithin (first 3 elements to index 4):", combinedArray);

//   combinedArray.fill("filled", 2, 5);
//   console.log("After fill (index 2 to 4 with 'filled'):", combinedArray);

//   const popped = combinedArray.pop();
//   console.log("Popped element:", popped);
//   console.log("After pop:", combinedArray);

//   const shifted = combinedArray.shift();
//   console.log("Shifted element:", shifted);
//   console.log("After shift:", combinedArray);

//   combinedArray.unshift(100, 200);
//   console.log("After unshift (100, 200):", combinedArray);

//   console.log(combinedArray);
// }

// console.log("Final result:", modifyArray());

// #2 

// function manipulateObjects() {
//     const people = [{ name: 'Alice' }, { name: 'Bob' }];
//     const places = [{ city: 'London' }, { city: 'Paris' }];
//     console.log("people array:", people);
//     console.log("places array:", places);

//     let mergedArray = people.concat(places);
//     console.log("After concat (mergedArray):", mergedArray);

//     mergedArray.copyWithin(2, 0, 2);
//     console.log("After copyWithin (first 2 elements to index 2):", mergedArray);

//     mergedArray.fill({ city: 'New York' }, -2);
//     console.log("After fill (last 2 elements with { city: 'New York' }):", mergedArray);

//     const popped = mergedArray.pop();
//     console.log("Popped element:", popped);
//     console.log("After pop:", mergedArray);

//     const shifted = mergedArray.shift();
//     console.log("Shifted element:", shifted);
//     console.log("After shift:", mergedArray);

//     mergedArray.unshift({ name: 'Charlie' }, { name: 'David' });
//     console.log("After unshift ({ name: 'Charlie' }, { name: 'David' }):", mergedArray);

//     console.log("Final mergedArray:", mergedArray);
// }

// manipulateObjects();
