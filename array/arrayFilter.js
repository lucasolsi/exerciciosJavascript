<<<<<<< HEAD
const products = [
    { name: 'Mouse', price: 10.92, fragile: true },
    { name: 'Keyboard', price: 25.99, fragile: true },
    { name: 'Cheap Phone', price: 59.90, fragile: false },
    { name: 'Phone', price: 199.21, fragile: true },
    { name: 'Stone', price: 0.18, fragile: false },
    { name: 'Shoe', price: 56.08, fragile: false }
];

const expensive = product => product.price >= 50;
const fragileProduct = product => product.fragile;

=======
const products = [
    { name: 'Mouse', price: 10.92, fragile: true },
    { name: 'Keyboard', price: 25.99, fragile: true },
    { name: 'Cheap Phone', price: 59.90, fragile: false },
    { name: 'Phone', price: 199.21, fragile: true },
    { name: 'Stone', price: 0.18, fragile: false },
    { name: 'Shoe', price: 56.08, fragile: false }
];

const expensive = product => product.price >= 50;
const fragileProduct = product => product.fragile;

>>>>>>> 963c1ee5ab11efe93fa5583affb024fd28b2c60f
console.log(products.filter(expensive).filter(fragileProduct));