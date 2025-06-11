// # 1
let academy = {
    name: 'dato',
    courses: 'GOA',
    socialLink: '*link*',
    status: 'parent',  
    review: '10',
}

console.log(Object.assign(academy));

console.log(Object.keys(academy));

console.log(Object.values(academy));

Object.freeze(academy);

console.log(Object.isFrozen(academy));

// # 2

