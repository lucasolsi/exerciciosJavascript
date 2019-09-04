<<<<<<< HEAD
function Person(name) {
    this.name = name;
    this.speak = function () {
        console.log(`My name is ${this.name}.`);
    }
}

const p1 = new Person('James')
=======
function Person(name) {
    this.name = name;
    this.speak = function () {
        console.log(`My name is ${this.name}.`);
    }
}

const p1 = new Person('James')
>>>>>>> 963c1ee5ab11efe93fa5583affb024fd28b2c60f
p1.speak()