let students = new Array('James', 'Ana', 'John');
console.log(students);

students = ['John', 'James', 'Ana'];
for (let index = 0; index < students.length; index++) {
    const element = students[index];
    console.log(element);
};

students.push('Paul');
console.log(students[3]);

students.pop();
console.log(students);

students[7] = 'Carl';
console.log(students);
students.sort();
console.log(students);

delete students[2];
console.log(students[2]);
console.log(students);

students = ['Carl', 'Ana', 'John'];
students.splice(1, 1, 'Martin', 'April');
console.log(students);