const counterA = require('./instances');
const counterB = require('./instances');

// Returns an object
const counterC = require('./instanceNew')();
const counterD = require('./instanceNew')();

counterA.inc();
counterB.inc();
console.log(counterA.value, counterB.value);

counterC.inc();
counterC.inc();
console.log(counterC.value, counterD.value);