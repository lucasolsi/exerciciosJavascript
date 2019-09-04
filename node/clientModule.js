const moduleA = require('./moduleA');
const moduleB = require('./moduleB');

console.log(moduleA.greeting);
console.log(moduleB.greeting);

console.log(moduleA, moduleB);
console.log(moduleB.hello());