const _velocity = Symbol('velocity')
class Car {
    constructor(model) {
        this.model = model
        this[_velocity] = 0
    }

    set velocity(value) {
        
        if (typeof value !== 'number') return
        if (value >= 100 || value <= 0) return
        this[_velocity] = value
    }

    get velocity() {
        return this[_velocity]
    }
    accelerate() {
        if (this[_velocity] >= 100) return
        this[_velocity]++
    }

    break() {
        if (this[_velocity] <= 0) return
        this[_velocity]--
    }
}

const car = new Car('Tracker')

for (let i = 0; i <= 200; i++) {
    car.accelerate()
}
car.velocity = 2000
console.log(car.velocity)
