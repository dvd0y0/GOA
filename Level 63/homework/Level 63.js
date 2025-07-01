// # 1
// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7];
// const arr3 = [8, 9];

// const mergedArray = arr1.concat(arr2);

// mergedArray.copyWithin(5, 0, 3);

// mergedArray.fill(0, 6);

// mergedArray.pop();

// mergedArray.shift();

// mergedArray.unshift(100, 200);

// mergedArray.splice(2, 2, ...arr3);

// const slicedArray = mergedArray.slice(-5);

// const resultString = slicedArray.join(',');

// function comprehensiveArrayTask(array1, array2, array3) {

//     let merged = array1.concat(array2);
    
//     merged.copyWithin(5, 0, 3);
    
//     merged.fill(0, 6);
    
//     merged.pop();
    
//     merged.shift();

//     merged.unshift(100, 200);
    
//     merged.splice(2, 2, ...array3);
    
//     const sliced = merged.slice(-5);
    
//     return sliced.join(',');
// }

// console.log(comprehensiveArrayTask(arr1, arr2, arr3));

// # 2
// const students = ['Alice', 'Bob', 'Charlie'];
// const grades = [85, 90, 78];

// function addStudent(studentName, grade) {
//     students.unshift(studentName);
//     grades.unshift(grade);
//     return { students: students.slice(), grades: grades.slice() };
// }

// function removeLastStudent() {
//     students.pop();
//     grades.pop();
//     return { students: students.slice(), grades: grades.slice() };
// }

// function replaceGrade(index, newGrade) {
//     grades.splice(index, 1, newGrade);
//     return grades.slice();
// }

// function updateGrades(newValue) {
//     grades.fill(newValue);
//     return grades.slice();
// }

// console.log(addStudent('David', 92));
// console.log(removeLastStudent());
// console.log(replaceGrade(1, 95));
// console.log(updateGrades(80));

// # 3
// const playlist = ['Song A', 'Song B', 'Song C', 'Song D'];

// function addSong(songTitle) {
//     playlist.unshift(songTitle);
//     return playlist.slice();
// }

// function removeLastSong() {
//     playlist.pop();
//     return playlist.slice();
// }

// function moveSongs() {
//     playlist.copyWithin(playlist.length - 2, 0, 2);
//     return playlist.slice();
// }

// function combinePlaylists(secondPlaylist) {
//     return playlist.concat(secondPlaylist);
// }

// console.log(addSong('Song E'));
// console.log(removeLastSong());
// console.log(moveSongs());
// console.log(combinePlaylists(['Song X', 'Song Y']));

// # 4
// const cartItems = ['Shirt', 'Pants', 'Shoes'];
// const prices = [20, 30, 50];

// function addItem(item, price) {
//     cartItems.unshift(item);
//     prices.unshift(price);
//     return { cartItems: cartItems.slice(), prices: prices.slice() };
// }

// function removeFirstItem() {
//     cartItems.shift();
//     prices.shift();
//     return { cartItems: cartItems.slice(), prices: prices.slice() };
// }

// function replaceItem(index, newItem, newPrice) {
//     cartItems.splice(index, 1, newItem);
//     prices.splice(index, 1, newPrice);
//     return { cartItems: cartItems.slice(), prices: prices.slice() };
// }

// function createReceipt() {
//     return cartItems.join(',');
// }

// function applyDiscount(discountPrice) {
//     prices.fill(discountPrice);
//     return prices.slice();
// }

// console.log(addItem('Hat', 15));
// console.log(removeFirstItem());
// console.log(replaceItem(1, 'Jacket', 40));
// console.log(createReceipt());
// console.log(applyDiscount(10));

// # 5
// const library = [
//     { title: 'Book A', copies: 5 },
//     { title: 'Book B', copies: 3 },
//     { title: 'Book C', copies: 7 }
// ];

// function addBook(book) {
//     library.push(book);
//     return library.slice();
// }

// function removeLastBook() {
//     library.pop();
//     return library.slice();
// }

// function updateBookCopies(title, newCopies) {
//     const index = library.findIndex(book => book.title === title);
//     if (index !== -1) {
//         library.splice(index, 1, { ...library[index], copies: newCopies });
//     }
//     return library.slice();
// }

// function listBooks() {
//     return library.map(book => book.title).join(',');
// }

// function extractBooks() {
//     return library.slice(0, 2);
// }

// function modifyBooks() {
//     library.copyWithin(library.length - 1, 0, 1);
//     return library.slice();
// }

// function resetCopies(number) {
//     library.forEach(book => book.copies = number);
//     return library.slice();
// }

// function removeFirstBook() {
//     library.shift();
//     return library.slice();
// }

// function addFirstBook(book) {
//     library.unshift(book);
//     return library.slice();
// }

// console.log(addBook({ title: 'Book D', copies: 4 }));
// console.log(removeLastBook());
// console.log(updateBookCopies('Book A', 10));
// console.log(listBooks());
// console.log(extractBooks());
// console.log(modifyBooks());
// console.log(resetCopies(1));
// console.log(removeFirstBook());
// console.log(addFirstBook({ title: 'Book E', copies: 6 }));

// # 6
// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7];
// const nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];

// const combinedArray = arr1.concat(arr2);
// combinedArray.copyWithin(5, 0, 3);
// combinedArray.fill(0, 6);
// combinedArray.pop();
// combinedArray.shift();
// combinedArray.unshift(100, 200);
// combinedArray.splice(2, 2, 'x', 'y', 'z');
// const slicedArray = combinedArray.slice(-5);
// const resultString = slicedArray.join(',');
// const flatArray = nestedArray.flat(Infinity);
// const hasEight = flatArray.includes(8);
// const indexOfNine = flatArray.indexOf(9);

// function comprehensiveArrayManipulation(array1, array2, nested) {
//     const combined = array1.concat(array2);
//     combined.copyWithin(5, 0, 3);
//     combined.fill(0, 6);
//     combined.pop();
//     combined.shift();
//     combined.unshift(100, 200);
//     combined.splice(2, 2, 'x', 'y', 'z');
//     const sliced = combined.slice(-5);
//     const flat = nested.flat(Infinity);
//     return {
//         resultString: sliced.join(','),
//         hasEight: flat.includes(8),
//         indexOfNine: flat.indexOf(9)
//     };
// }

// console.log(comprehensiveArrayManipulation(arr1, arr2, nestedArray));

// # 7
// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7];
// const nestedArray = [[1, 2], [3, 9], [5, [6, 9]]];

// const combinedArray = arr1.concat(arr2);
// combinedArray.copyWithin(4, 0, 2);
// combinedArray.fill(0, 2, 4);
// combinedArray.pop();
// combinedArray.shift();
// combinedArray.unshift(10, 20);
// combinedArray.splice(2, 2, 30, 40);
// const slicedArray = combinedArray.slice(-3);
// const resultString = slicedArray.join('-');
// const flatArray = nestedArray.flat(Infinity);
// const hasNine = flatArray.includes(9);
// const indexOfTen = flatArray.indexOf(10);
// const lastIndexOfNine = flatArray.lastIndexOf(9);
// flatArray.push(13);

// function comprehensiveArrayManipulation(array1, array2, nested) {
//     const combined = array1.concat(array2);
//     combined.copyWithin(4, 0, 2);
//     combined.fill(0, 2, 4);
//     combined.pop();
//     combined.shift();
//     combined.unshift(10, 20);
//     combined.splice(2, 2, 30, 40);
//     const sliced = combined.slice(-3);
//     const flat = nested.flat(Infinity);
//     flat.push(13);
//     return {
//         resultString: sliced.join('-'),
//         hasNine: flat.includes(9),
//         indexOfTen: flat.indexOf(10),
//         lastIndexOfNine: flat.lastIndexOf(9),
//         flatArray: flat.slice()
//     };
// }

// console.log(comprehensiveArrayManipulation(arr1, arr2, nestedArray));

// # 8
// let numbers = [10, 20, 30, 40, 50];
// const secondArray = [60, 70, 80];
// const concatenatedArray = numbers.concat(secondArray);
// numbers.copyWithin(-2, 1, 3);
// numbers.fill(100, 0, 3);
// const poppedElement = numbers.pop();
// const shiftedElement = numbers.shift();
// numbers.unshift(5, 15);
// const joinedString = numbers.join('-');
// const slicedArray = numbers.slice(1, 3);
// numbers.splice(1, 2, 200, 300);
// let nestedArr = [1, [2, 3], [4, [5, 6]]];
// const flatArray = nestedArr.flat(Infinity);
// const hasFifty = numbers.includes(50);
// const indexOfThirty = numbers.indexOf(30);
// const lastIndexOfTwenty = numbers.lastIndexOf(20);
// numbers.push(90, 100);

// function comprehensiveArrayManipulation() {
//     let nums = [10, 20, 30, 40, 50];
//     const second = [60, 70, 80];
//     const concatResult = nums.concat(second);
//     nums.copyWithin(-2, 1, 3);
//     nums.fill(100, 0, 3);
//     const popped = nums.pop();
//     const shifted = nums.shift();
//     nums.unshift(5, 15);
//     const joined = nums.join('-');
//     const sliced = nums.slice(1, 3);
//     nums.splice(1, 2, 200, 300);
//     let nested = [1, [2, 3], [4, [5, 6]]];
//     const flat = nested.flat(Infinity);
//     const has50 = nums.includes(50);
//     const index30 = nums.indexOf(30);
//     const lastIndex20 = nums.lastIndexOf(20);
//     nums.push(90, 100);
//     return {
//         concatenatedArray: concatResult,
//         modifiedNumbers: nums.slice(),
//         poppedElement: popped,
//         shiftedElement: shifted,
//         joinedString: joined,
//         slicedArray: sliced,
//         flatArray: flat,
//         hasFifty: has50,
//         indexOfThirty: index30,
//         lastIndexOfTwenty: lastIndex20
//     };
// }

// console.log(comprehensiveArrayManipulation());