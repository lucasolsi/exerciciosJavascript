for (let char of 'T3st2') {
    console.log(char);
}

const technology = ['LCD', 'Bluetooth', 'Wi-Fi', 'LED'];
for (let tech of technology) {
    console.log(tech);
}

const newTech = new Map([
    ['LCD', { avaliable: true }],
    ['Bluetooth', { avaliable: true }],
    ['Quantum computing', { avaliable: false }]
]);

for (let tech of newTech) {
    console.log(tech);
};

for (let key of newTech.keys()) {
    console.log(key);
};

for (let value of newTech.values()) {
    console.log(value);
};

for (let [key, value] of newTech.entries()) {
    console.log(key, value);
}

const s = new Set(['a', 'b', 'c'])
for (let char of s) {
    console.log(char);
};