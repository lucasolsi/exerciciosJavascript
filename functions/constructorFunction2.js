function Person(name) {
    this.name = name;
    this.speak = function () {
        console.log(`My name is ${this.name}.`);
    }
}

const p1 = new Person('James')
p1.speak()