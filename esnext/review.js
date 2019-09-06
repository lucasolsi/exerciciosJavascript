// Arrow function
const sum = (a, b) => a + b;
console.log(sum(1, 5));

// Default parameters
function log(text = 'Text') {
    console.log(text);
};

log();
log('Overwrite.');

// Rest operator
function total(...numbers) {
    let total = 0;
    numbers.forEach(n => total += n);
    return total;
}

console.log(total(1, 2, 3, 5, 10));

// Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Classes
class Animal { };
class Dog extends Animal {
    makeSound() {
        return 'Sound!';
    }
};

console.log(new Dog().makeSound());