const fs = require('fs');

const product = {
    name: 'USB Cable',
    price: 4.98,
    discount: 0.05
}

fs.writeFile(__dirname + '/fileWritten.json', JSON.stringify(product), err => {
    console.log(err || 'File stored.');
})