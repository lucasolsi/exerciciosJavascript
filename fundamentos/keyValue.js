const teste = 'This is a test';

function exec() {
    const teste = 'Another test';
    return teste;
}

const client = {
    name: 'Cliente',
    age: 30,
    address: {
        street: 'Rua das Casas, 200',
        zipCode: 02105
    }
}

console.log(teste);
console.log(exec());
console.log(client);