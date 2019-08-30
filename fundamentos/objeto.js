console.log(typeof Object);

console.log(typeof new Object);

const Client = function () { };
console.log(typeof Client); //Function
console.log(typeof new Client); //Object

class Product { };
console.log(typeof Product); //Function
console.log(typeof new Product); //Object