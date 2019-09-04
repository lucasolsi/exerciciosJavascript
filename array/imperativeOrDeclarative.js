<<<<<<< HEAD
const students = [
    { name: 'Mary', grade: 8.6 },
    { name: 'John', grade: 6.9 }
];

// Imperative
let gradeSum = 0;
for (let i = 0; i < students.length; i++) {
    gradeSum += students[i].grade;
}
console.log(gradeSum / students.length)

// Declarative
const getGrade = student => student.grade;
const sum = (total, current) => total + current;
const gradeSum2 = students.map(getGrade).reduce(sum);

=======
const students = [
    { name: 'Mary', grade: 8.6 },
    { name: 'John', grade: 6.9 }
];

// Imperative
let gradeSum = 0;
for (let i = 0; i < students.length; i++) {
    gradeSum += students[i].grade;
}
console.log(gradeSum / students.length)

// Declarative
const getGrade = student => student.grade;
const sum = (total, current) => total + current;
const gradeSum2 = students.map(getGrade).reduce(sum);

>>>>>>> 963c1ee5ab11efe93fa5583affb024fd28b2c60f
console.log(gradeSum2 / students.length);