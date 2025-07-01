const fruits = ['apple', 'orange', 'lemon', 'banana', 'mango'];

const citrus = fruits.slice(1, 3);

const fruitString = fruits.join('-');

function processFruits(fruitsArray) {
    const citrus = fruitsArray.slice(1, 3);
    return fruitsArray.join('-');
}

console.log(citrus);
console.log(fruitString);
console.log(processFruits(fruits));