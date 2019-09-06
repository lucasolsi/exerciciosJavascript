function tag(parts, ...values) {
    console.log(parts);
    console.log(values);
    return 'New string.'
}

const student = 'Sara';
const status = 'Pass';
console.log(tag`${student} has status: ${status}.`);