const phone = {
    brand: 'Apple',
    name: 'iPhone',
    model: 'X',
    storage: '128GB'
}

console.log(Object.keys(phone))
console.log(Object.values(phone))
console.log(Object.entries(phone))

Object.entries(phone).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})

Object.defineProperty(phone, 'ram', {
    enumerable: true,
    writable: false,
    value: '4GB'
})

phone.ram = '3GB'
console.log(phone.ram)
console.log(Object.keys(phone))

// Object.assign
const destination = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(destination, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 9999
console.log(obj)