function brazilianReal(parts, ...values) {
    const result = [];
    values.forEach((value, index) => {
        value = isNaN(value) ? value : `R$${value.toFixed(2)}`;
        result.push(parts[index], value);
    })
    return result.join('');
}

const price = 19.95;
const quantity = 12;

console.log(brazilianReal`Price per unit: ${price}\nQuantity: ${quantity}`);