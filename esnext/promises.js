function runAfter(seconds, phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(phrase) }, seconds * 1000)
    })
}

runAfter(2, 'Nice')
    .then(phrase => phrase.concat('!!!'))
    .then(newPhrase => console.log(newPhrase))