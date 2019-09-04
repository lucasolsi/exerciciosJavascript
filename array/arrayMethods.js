const brands = ['Nike', 'Adidas', 'Puma', 'Converse'];

// Removing the last element
brands.pop();
console.log(brands);

// Adding a new element on last position
brands.push('Mizzuno');
console.log(brands);

// Removing the first element
brands.shift();
console.log(brands);

// Adding a new element on first position
brands.unshift('GAP');
console.log(brands);

// Adding a new element at a specific position
brands.splice(2, 0, 'Guess', 'Converse');
console.log(brands);

// Removing elements from a specific position
brands.splice(2, 1)
console.log(brands);

// Filling a new array with a part of the existing one
const someBrands = brands.slice(2);
console.log(someBrands);

// Filling a new array with an interval from the existing one
const someOtherBrands = brands.slice(1, 4);
console.log(someOtherBrands);