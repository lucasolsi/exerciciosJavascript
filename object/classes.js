class Operation {
    constructor(name = 'Generic', value = 0) {
        this.name = name
        this.value = value
    }
};

class Account {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.operations = []
    };

    addOperation(...operations) {
        operations.forEach(l => this.operations.push(l))
    };

    summary() {
        let operationsValue = 0;
        this.operations.forEach(l => {
            operationsValue += l.value
        });
        return operationsValue;
    };
};

const salary = new Operation('Salary', 7800);
const creditCard = new Operation('Credit card bill', -493);

const accounts = new Account(09, 2019);
accounts.addOperation(salary, creditCard);
console.log(accounts.summary());

// Inheritance
class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }
};

class Bike extends Vehicle {
    constructor(wheels, fuel = 'Human') {
        super(wheels);
        this.fuel = fuel;
    }
};

class miniBike extends Bike {
    constructor() {
        super('4');
    }
};

const smallBike = new miniBike;
console.log(smallBike); 