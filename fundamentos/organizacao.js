let a = 2;

//Funções

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

//Array
const valores = [3.14, 5, 2];
console.log(valores[0], valores[2]);

valores[10] = 50;
console.log(valores);

console.log(valores.length);

valores.pop();

console.log(valores);