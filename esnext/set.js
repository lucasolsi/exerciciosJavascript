const countries = new Set();
countries.add('Brazil');
countries.add('USA');
countries.add('Mexico');
countries.add('Canada');
countries.add('USA');

console.log(countries);
console.log(countries.size);
console.log(countries.has('Brazil'));
countries.delete('Mexico');
console.log(countries.has('Mexico'));

const models = ['A50', 'A60', 'A50', 'S10'];
const modelsSet = new Set(models);
console.log(modelsSet);