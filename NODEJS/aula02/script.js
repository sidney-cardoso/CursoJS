const Person = require('./pastaA/pastaB/pastaC/module')
// const sum = require('./module')
const Dog = require('./pastaD/module2')

const dog = new Dog('York Shire')
dog.latir()

// const person = new Person('Sidney')
// person.sayMyName()

// console.log(sum(10, 5))

// Variáveis internas do node
console.log(__filename)
console.log(__dirname)

// Módulo interno do node

const path = require('path')
console.log(path.resolve(__dirname, '..', '..', 'NODEJS', 'aula02'))
