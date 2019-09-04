const numbr = [1, 2, 3, 4, 5];

let result = numbr.map(function (element) {
    return element * 2;
});

console.log(result);

const addNumbr = element => element + 4;
const tripleNumbr = element => element * 3;
const moneyNumbr = element => `R$ ${parseFloat(element).toFixed(2).replace('.', ',')}`;

result = numbr.map(addNumbr).map(tripleNumbr).map(moneyNumbr);
console.log(result);

const cart = ['{"item": "Pencil", "quantity":3}', '{"item": "Pen", "quantity":1}',
    '{"item": "Book", "quantity":5}', '{"item": "Coloured pencil", "quantity":12}'];

const toObject = json => JSON.parse(json);
const quantityOnly = cart => cart.quantity;

const itemCart = cart.map(toObject).map(quantityOnly);
console.log(itemCart);