const person = {
    name: 'John',
    age: 35,
    address: {
        street: 'London Street, 59',
        zipCode: 75920
    }
};

const { name, age } = person;
console.log(name, age);

const { name: n, age: a } = person;
console.log(n, a);

const { lastName, exercise = true } = person;
console.log(lastName, exercise);

const [an] = [1];
console.log(an);

const [a1, , a3, , a4, a5 = 0] = [20, 3, 8, 90];
console.log(a1, a3, a4, a5);

const [, [, rating]] = [[, 8, 8], [9, 6, 8]];
console.log(rating);


function rand({ min = 0, max = 9999 }) {
    const result = Math.random() * (max - min) + min;
    return Math.floor(result);
};

const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log(rand({ min: 900 }));
console.log(rand({}));

function newRand([min2 = 0, max2 = 9999]) {
    if (min2 > max2) [min2, max2] = [max2, min2];
    const result2 = Math.random() * (max2 - min2) + min2;
    return Math.floor(result2);
};

console.log(newRand([50, 40]));
console.log(newRand([302]));
console.log(newRand([, 30]));