// --------------------------------- Revisando objetos --------------------------------- //
/* 
const person = {
    name: 'John',
    lastName: 'Doe'
}

console.log(person.name)
console.log(person['lastName'])

// Acessando a chave de forma dinâmica
const key = 'name'
console.log(person[key]) */

// Criando objeto com função construtora

const Person = new Object()
Person.name = 'John'
Person.lastName = 'Doe'
Person.age = 27
Person.sayAge = function () {
    const date = new Date().getFullYear() - this.age
    return `Nasci em ${date}`
}
Person.sayName = function () {
    console.log(`Meu nome é ${this.name} ${this.lastName}`)
}
// delete Person.lastName
// Person.sayName()
// console.log(Person.sayAge())

// console.log('\nCHAVES DO OBJETO:\n\n')
for (let key in Person) {
    // console.log(key)
}

// factory functions

function createPerson(name, lastName) {
    return {
        name,
        lastName,
        get fullName() {
            return `${this.name} ${this.lastName}`
        }
    }
}

const person = createPerson('John', 'Doe')
console.log(person.fullName)

// constructor function
function Person2(name, lastName) {
    this.name = name
    this.lastName = lastName
    Object.freeze(this) // Congela o objeto Person2 para que nada possa ser alterado
}
// A palavra new cria um novo objeto vazio {} e associa ao this o objeto criado
// Seria o mesmo que fazer:
/* 
const Person2 = {}
Person2.name = "Joe" 
*/
const person1 = new Person2('Sidney', 'Cardoso')
// Object.freeze(person1) // Congela o objeto Person2 para que nada possa ser alterado
person1.name = 'Maria' // Não irá funcionar
delete person1.name // Não irá funcionar
const { name, lastName } = person1
console.log(`${name} ${lastName}`)
