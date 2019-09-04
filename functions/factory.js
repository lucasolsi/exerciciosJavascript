<<<<<<< HEAD
// Simple factory
function createProduct() {
    return {
        name: 'Product',
        price: 99.99
    }
}

console.log(createProduct())

function createDiscount(product, discount) {
    return {
        product,
        discount
    }
}

console.log(createDiscount('Product', 0.1))
=======
// Simple factory
function createProduct() {
    return {
        name: 'Product',
        price: 99.99
    }
}

console.log(createProduct())

function createDiscount(product, discount) {
    return {
        product,
        discount
    }
}

console.log(createDiscount('Product', 0.1))
>>>>>>> 963c1ee5ab11efe93fa5583affb024fd28b2c60f
console.log(createDiscount('Another product', 0.05))