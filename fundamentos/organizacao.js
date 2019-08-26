let a = 2;

function testaSoma(a, b){
    console.log(a+b);
}

function outraSoma(a, b = 0){
    return a+b;
}

testaSoma(4, 3);
console.log(outraSoma(10, 19));

const novaSoma = (a, b) => {
    return a+b;
}
console.log(novaSoma(10,2));

const maisSoma = (a, b) => a+b;
console.log(maisSoma(9, 18));