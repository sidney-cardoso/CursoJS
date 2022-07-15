/* const person = {
    name: 'Sidney',
    lastName: 'Silva',
    age: 17
}
console.log(person.name)
 */

const createPerson = (name, lastName, age) => {
    return {
        name,
        lastName,
        age
    }
}

const person = createPerson('Sidney', 'Silva', 17)
// console.log(person)

const person1 = {
    name: 'Sidney',
    lastName: 'Silva',
    age: 17,

    sayHello() {
        console.log(
            `Hello, my name is ${this.name} ${this.lastName}, i am ${this.age} years old`
        )
    }
}
person1.sayHello()
