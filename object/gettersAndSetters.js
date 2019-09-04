<<<<<<< HEAD
const sequence = {
    _value: 1,
    get value() { return this._value++ },
    set value(value) {
        /*if (value > this._value) { 
            this._value = value
        }*/
        this._value = value
    }
}
console.log(sequence.value, sequence.value)
sequence.value = 502
=======
const sequence = {
    _value: 1,
    get value() { return this._value++ },
    set value(value) {
        /*if (value > this._value) { 
            this._value = value
        }*/
        this._value = value
    }
}
console.log(sequence.value, sequence.value)
sequence.value = 502
>>>>>>> 963c1ee5ab11efe93fa5583affb024fd28b2c60f
console.log(sequence.value, sequence.value)