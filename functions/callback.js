const brands = ['Ford', 'Ferrari', 'Audi']

function showBrand(name, index) {
    console.log(`${index + 1}. ${name}`)
}

brands.forEach(showBrand)

// Using arrow function
console.log('Arrow function')
brands.forEach(brand => console.log(brand))

// Another example

const grades = [7.2, 9.8, 10, 4.1, 1.7, 9.0]

// Not using callback
let lowGrades = []
for (let i in grades) {
    if (grades[i] < 7) {
        lowGrades.push(grades[i])
    }
}

console.log(lowGrades)

// Using callback
lowGrades = grades.filter(function (grade) {
    return grade < 7
})

console.log(lowGrades)

// Callback + arrow
lowGrades2 = grades.filter(grade => grade < 7)
console.log(lowGrades2)

// Browser callback
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('Something happened!')
}