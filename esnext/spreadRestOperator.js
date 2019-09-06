const employer = {
    name: 'Mary',
    sallary: 3000.00
};

// Spread + Object
const clone = { active: true, ...employer };
console.log(clone);

// Spread + Array
const groupA = ['John', 'Mary', 'Sara'];
const finalGroup = ['Maria', ...groupA, 'James'];
console.log(finalGroup);