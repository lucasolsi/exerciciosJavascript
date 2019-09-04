const school = [{
    name: '1st Grade',
    students: [{
        name: 'Mary',
        score: 90
    }, {
        name: 'Sara',
        score: 98
    }, {
        name: 'John',
        score: 84
    }]
}, {
    name: '2nd Grade',
    students: [{
        name: 'Mike',
        score: 100
    }, {
        name: 'James',
        score: 67
    }]
}];

const getScore = student => student.score;
const getGradeScore = grade => grade.students.map(getScore);

const grades1 = school.map(getGradeScore);
console.log(grades1);

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback));
};

console.log(school.flatMap(getGradeScore));