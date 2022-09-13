class Person {
    constructor(name, middleName) {
        this.name = name
        this.middleName = middleName
    }
    fullName() {
        console.log(`Nome: ${this.name}, Sobrenome: ${this.middleName}`)
    }
}

function Person2(name, middleName) {
    this.name = name
    this.middleName = middleName
}
Person2.prototype.fullName = function () {
    console.log(`Nome: ${this.name}, Sobrenome: ${this.middleName}`)
}

const person = new Person('Sidney', 'Cardoso')
const person2 = new Person2('Mariana', 'Cardoso')

console.log(person)
console.log(person2)
