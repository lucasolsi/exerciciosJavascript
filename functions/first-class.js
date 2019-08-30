//Explicit
function func1() { };

//Store into a variable
const func2 = function () { };

//Store into an array (not so usual)
const array = [function (n1, n2) { return n1 + n2 }, func1, func2];
console.log(array[0](2, 3));

//Store as an object attribute
const obj = {};
obj.makeCall = function () { return 'This is a call.' };
console.log(obj.makeCall());

//Function as parameter
function run(anotherFunc) {
    anotherFunc()
};

run(function () { console.log('Running...') });

//Function being returned/containing another function
function sum(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

sum(10, 3)(8);