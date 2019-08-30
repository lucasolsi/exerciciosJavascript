const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in numbers) {
    if (x == 3) {
        break;
    }
    console.log(`${x} = ${numbers[x]}`);
}
console.log('End of loop X');

for (y in numbers) {
    if (y == 7) {
        continue;
    }
    console.log(`${y} = ${numbers[y]}`);
}

console.log('End of loop Y');

// Something to avoid.
label: for (n in numbers) {
    for (n1 in numbers) {
        if (n == 3 && n1 == 7) break label;
        console.log(`Vector = ${n},${n1}`);
    }
}
