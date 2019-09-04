<<<<<<< HEAD
class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`My name is ${this.name}.`);
    }
}

const p1 = new Person('James')
p1.speak()

const createPerson = name => {
    return {
        speak: () => console.log(`My name is ${name}.`)
    }
}

const p2 = createPerson('Ana');
=======
class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`My name is ${this.name}.`);
    }
}

const p1 = new Person('James')
p1.speak()

const createPerson = name => {
    return {
        speak: () => console.log(`My name is ${name}.`)
    }
}

const p2 = createPerson('Ana');
>>>>>>> 963c1ee5ab11efe93fa5583affb024fd28b2c60f
p2.speak();