function everythingOk(rating) {
    if (rating > 10) {
        console.log('Invalid rating.');
    } else if (rating >= 6) {
        console.log('Cool.');
    } else
        console.log('Something is wrong.');
}

everythingOk(7);
everythingOk(50);
everythingOk(5);


const grades = [9.5, 2.3, 10.0, 7.4, 5.5];
for (let i = 0; i < grades.length; i++) {
    console.log(`grade = ${grades[i]}`); // Crase e não apóstrofo.
}