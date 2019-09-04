<<<<<<< HEAD
const languages = ['English', 'Portuguese', 'Italian', 'Latin']

const printLanguage = function (element) {
    console.log(element);
};

languages.forEach(printLanguage)

languages.forEach(function (language, index) {
    console.log(`${index + 1} = ${language}`)
})

Array.prototype.myForEach = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
}

languages.myForEach(function (language, index) {
    console.log(`${index + 1} = ${language}`)
=======
const languages = ['English', 'Portuguese', 'Italian', 'Latin']

const printLanguage = function (element) {
    console.log(element);
};

languages.forEach(printLanguage)

languages.forEach(function (language, index) {
    console.log(`${index + 1} = ${language}`)
})

Array.prototype.myForEach = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
}

languages.myForEach(function (language, index) {
    console.log(`${index + 1} = ${language}`)
>>>>>>> 963c1ee5ab11efe93fa5583affb024fd28b2c60f
})