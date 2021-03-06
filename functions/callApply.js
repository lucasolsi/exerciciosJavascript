<<<<<<< HEAD
function getPrice(tax = 0, currency = 'R$') {
    return `${currency}${this.price * (1 - this.discount) * (1 + tax)}`
}

const product = {
    name: 'Mouse',
    price: 49,
    discount: 0.05,
    getPrice
}

console.log(product.getPrice())

const car = {
    price: 39000, discount: 0.12
}

console.log(getPrice.call(car))
console.log(getPrice.apply(car))

// Using parameters
console.log(getPrice.call(car, 0.04, '$'))
=======
function getPrice(tax = 0, currency = 'R$') {
    return `${currency}${this.price * (1 - this.discount) * (1 + tax)}`
}

const product = {
    name: 'Mouse',
    price: 49,
    discount: 0.05,
    getPrice
}

console.log(product.getPrice())

const car = {
    price: 39000, discount: 0.12
}

console.log(getPrice.call(car))
console.log(getPrice.apply(car))

// Using parameters
console.log(getPrice.call(car, 0.04, '$'))
>>>>>>> 963c1ee5ab11efe93fa5583affb024fd28b2c60f
console.log(getPrice.apply(car, [0.04, '$']))