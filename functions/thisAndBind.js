<<<<<<< HEAD
const person = {
    speak: 'Hello world!',
    sayIt() {
        console.log(this.speak)
    }
}

person.sayIt();

console.log('Using bind()')
const talkAbout = person.sayIt.bind(person);
talkAbout();

function Person2() {
    this.age = 0;
    const self = this
    setInterval(function () {
        self.age++;
        console.log(self.age);
    }/*.bind(this)*/, 1000)
}

=======
const person = {
    speak: 'Hello world!',
    sayIt() {
        console.log(this.speak)
    }
}

person.sayIt();

console.log('Using bind()')
const talkAbout = person.sayIt.bind(person);
talkAbout();

function Person2() {
    this.age = 0;
    const self = this
    setInterval(function () {
        self.age++;
        console.log(self.age);
    }/*.bind(this)*/, 1000)
}

>>>>>>> 963c1ee5ab11efe93fa5583affb024fd28b2c60f
new Person2