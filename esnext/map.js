const tech = new Map();
tech.set('React', { framework: false })
tech.set('Angular', { framework: true })

console.log(tech.get('Angular').framework);

const variousKeys = new Map([
    [function () { }, 'Function'],
    [{}, 'Object'],
    [111, 'Number']
]);

variousKeys.forEach((val, key) => {
    console.log(key, val);
})

console.log(variousKeys.has(111));
variousKeys.delete(111);
console.log(variousKeys.has(111));
console.log(variousKeys.size);