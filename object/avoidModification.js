<<<<<<< HEAD
// Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Product',
    price: 10.99,
    quantity: 3
});

console.log(product);
product.discount = '10%';
console.log(product);

// Object.seal
const computer = { processor: 'Core i7', ram: '16GB', storage: '2TB' };
Object.seal(computer);
computer.flash = 'SSD';
console.log(computer);
computer.ram = '20GB';
=======
// Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Product',
    price: 10.99,
    quantity: 3
});

console.log(product);
product.discount = '10%';
console.log(product);

// Object.seal
const computer = { processor: 'Core i7', ram: '16GB', storage: '2TB' };
Object.seal(computer);
computer.flash = 'SSD';
console.log(computer);
computer.ram = '20GB';
>>>>>>> 963c1ee5ab11efe93fa5583affb024fd28b2c60f
console.log(computer);