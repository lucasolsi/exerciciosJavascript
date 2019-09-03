const product = new Object
product.name = 'Chair';
product['brand'] = 'Generic';
product.price = 200;

console.log(product)

delete product.price;
delete product['brand'];
console.log(product);

const phone = {
    model: 'A1',
    price: 1000,
    owner: {
        name: 'John Doe',
        age: 21,
        address: {
            street: '56, House St.',
            zipcode: 10296
        }
    },
    installedApps: [
        'Instagram', 'Facebook', 'Whatsapp'
    ],
    calculateBill: function () {
        // ...
    }
}

phone.model = 'A2'
phone['owner']['name'] = 'DOE, John'
console.log(phone)

//delete phone.installedApps
console.log(phone)
console.log(phone.installedApps.length)

const attrName = 'rating'
const attrValue = 8.99

const obj3 = {}
obj3[attrName] = attrValue
console.log(obj3)

const obj4 = { [attrName]: attrValue }
console.log(obj4)

const obj5 = {
    something: function () {
        //...
    },
    function() {
        //...
    }
}
console.log(obj5)