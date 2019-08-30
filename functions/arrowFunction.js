let doubleNum = function (a) {
    return 2 * a
}

doubleNum = (a) => {
    return 2 * a
}

// Works for a single parameter
doubleNum = a => 2 * a // Return statement implicit
console.log(doubleNum(Math.PI))

// Regular function
let hello = function () {
    return 'Hello world!'
}

// Using arrow function
hello = () => 'Hello world!'
console.log(hello())