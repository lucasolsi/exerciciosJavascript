function Car(maxSpeed = 200, variation = 3) {
    let currentSpeed = 0

    this.accelerate = function () {
        if (currentSpeed + variation <= maxSpeed) {
            currentSpeed += variation
        } else {
            currentSpeed = maxSpeed
        }
    }

    this.getCurrentSpeed = function () {
        return currentSpeed
    }

}

const fastCar = new Car
fastCar.accelerate()
console.log(fastCar.getCurrentSpeed())

const speedCar = new Car(350, 25)
speedCar.accelerate()
console.log(speedCar.getCurrentSpeed())