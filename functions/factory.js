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
console.log(createDiscount('Another product', 0.05))