<<<<<<< HEAD
// Literal notation
const obj1 = {}

// JS Object
const obj2 = new Object

// Constructor function
function Product(name, price, discount) {
    this.name = name
    this.getDiscountPrice = () => {
        return price * (1 - discount)
    }
}

const prod1 = new Product('Watter bottle', 2.00, 0.02)
const prod2 = new Product('TV', 1849, 0.15)
console.log(prod1.getDiscountPrice(), prod2.getDiscountPrice())

// Factory function
function createEmployer(name, pricePerHour, vacation) {
    return {
        name,
        pricePerHour,
        vacation,
        getSalary() {
            return (pricePerHour * 8 * 25) - (pricePerHour * 8 * vacation)
        }
    }
}

const empl1 = createEmployer('James', 6, 3)
const empl2 = createEmployer('Anna', 8.4, 0)
console.log(empl1.getSalary())
console.log(empl2.getSalary())

// Returning an Object from JSON
const fromJSON = JSON.parse('{"info": "This is a JSON."}')
console.log(fromJSON.info)
=======
// Literal notation
const obj1 = {}

// JS Object
const obj2 = new Object

// Constructor function
function Product(name, price, discount) {
    this.name = name
    this.getDiscountPrice = () => {
        return price * (1 - discount)
    }
}

const prod1 = new Product('Watter bottle', 2.00, 0.02)
const prod2 = new Product('TV', 1849, 0.15)
console.log(prod1.getDiscountPrice(), prod2.getDiscountPrice())

// Factory function
function createEmployer(name, pricePerHour, vacation) {
    return {
        name,
        pricePerHour,
        vacation,
        getSalary() {
            return (pricePerHour * 8 * 25) - (pricePerHour * 8 * vacation)
        }
    }
}

const empl1 = createEmployer('James', 6, 3)
const empl2 = createEmployer('Anna', 8.4, 0)
console.log(empl1.getSalary())
console.log(empl2.getSalary())

// Returning an Object from JSON
const fromJSON = JSON.parse('{"info": "This is a JSON."}')
console.log(fromJSON.info)
>>>>>>> 963c1ee5ab11efe93fa5583affb024fd28b2c60f
console.log(typeof fromJSON)