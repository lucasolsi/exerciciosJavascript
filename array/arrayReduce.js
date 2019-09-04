<<<<<<< HEAD
const students = [
    { name: 'John', grade: 6.2, active: true },
    { name: 'Ana', grade: 9.9, active: false },
    { name: 'James', grade: 3.4, active: false },
    { name: 'Mary', grade: 8.1, active: true },
]

const result = students.map(a => a.grade).reduce(function (accum, current) {
    console.log(accum, current);
    return accum + current;
});

console.log(result);

const allActive = (student, active) => student && active;
console.log(students.map(a => a.active).reduce(allActive));

const anyActive = (student, active) => student || active;
=======
const students = [
    { name: 'John', grade: 6.2, active: true },
    { name: 'Ana', grade: 9.9, active: false },
    { name: 'James', grade: 3.4, active: false },
    { name: 'Mary', grade: 8.1, active: true },
]

const result = students.map(a => a.grade).reduce(function (accum, current) {
    console.log(accum, current);
    return accum + current;
});

console.log(result);

const allActive = (student, active) => student && active;
console.log(students.map(a => a.active).reduce(allActive));

const anyActive = (student, active) => student || active;
>>>>>>> 963c1ee5ab11efe93fa5583affb024fd28b2c60f
console.log(students.map(a => a.active).reduce(anyActive));