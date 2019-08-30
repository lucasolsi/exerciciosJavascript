// Setting a default parameter for a function
function sum1(n1, n2, n3) {
    n1 = n1 || 1;
    n2 = n2 || 1;
    n3 = n3 || 1;
    return n1 + n2 + n3
}

console.log(sum1(), sum1(10), sum1(2, 4));

// Another strategy
function sum2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

console.log(sum2(), sum2(0, 0, 0));

// ES2015 standard
function sum3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(sum3(), sum3(0, 0, 0));