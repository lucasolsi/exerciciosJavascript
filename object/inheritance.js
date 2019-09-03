const car1 = {
    model: 'V8',
    maxSpeed: 250
};

const car2 = {
    model: 'V6',
    maxSpeed: 200
};

console.log(car1.__proto__);
console.log(car1.__proto__ === Object.prototype);
console.log(car2.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

function MyObject() { };
console.log(Object.prototype, MyObject.prototype);

// Prototype chain
const fatherOfFather = { attr: 'Prop1' };
const father = { __proto__: fatherOfFather, attr2: 'PropFather' };
const son = { __proto__: father, attr3: 'PropSon' };

console.log(son.attr, son.attr2, son.attr3);
console.log(father.attr3, father.attr2);

const newCar = {
    currentSpd: 0,
    maxSpeed: 220,
    speedUp(variation) {
        if (this.currentSpd + variation <= this.maxSpeed) {
            this.currentSpd += variation;
        } else {
            this.currentSpd = this.maxSpeed;
        };
    },
    status() {
        return `${this.currentSpd}Km/h de ${this.maxSpeed}Km/h.`;
    }
};

const speedCar = {
    model: 'V12',
    maxSpeed: 350
};

const slowCar = {
    model: 'V6',
    status() {
        return `${this.model}: ${super.status()}`;
    }
};

Object.setPrototypeOf(speedCar, newCar);
Object.setPrototypeOf(slowCar, newCar);

console.log(speedCar);
console.log(slowCar);

slowCar.speedUp(50);
console.log(slowCar.status());

speedCar.speedUp(80);
console.log(speedCar.status());

const brand = { name: 'Xiaomi', country: 'China' };
const miMix = Object.create(brand);
miMix.model = 'Mi Mix';
console.log(miMix.country);

const mi9t = Object.create(brand, {
    model: { value: 'Mi 9T', enumerable: false },
    country: {
        value: 'Japan', writable: false,
        enumerable: true
    }
});

console.log(mi9t.country);
mi9t.model = 'Mi 9SE';
console.log(`${miMix.model} is made in ${miMix.country}`);
console.log(Object.keys(mi9t));

for (let key in mi9t) {
    mi9t.hasOwnProperty(key) ? console.log(key) : console.log(`Inherited: ${key}`);
};