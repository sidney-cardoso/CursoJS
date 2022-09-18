// module.exports = (x, y) => x + y

module.exports = class Person {
    constructor(name) {
        this.name = name
    }
    sayMyName() {
        console.log(this.name)
    }
}

module.exports = class Dog {
    constructor(name) {
        this.name = name
    }
    latir() {
        console.log('WOLF')
    }
}
