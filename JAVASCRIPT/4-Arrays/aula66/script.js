// ------------------------------------------------ MAP ------------------------------------------------ //
// Map - altera o valor de cada elemento do array, retornando um novo array.

// Dobrar o valor de cada elemento do array.
const numbers = [1, 3, 5, 2, 4, 20, 13, 18, 12, 99]

const double = numbers.map(value => value * 2)
console.log(double)

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto
const people = [
    { name: 'Pedro', age: 14 },
    { name: 'João', age: 48 },
    { name: 'Paula', age: 23 },
    { name: 'Artur', age: 19 },
    { name: 'Sofia', age: 17 },
    { name: 'Rafael', age: 32 },
    { name: 'Miguel', age: 18 },
    { name: 'Maria', age: 19 }
]

const names = people.map(person => person.name)
const peopleWithoutName = people.map(person => ({ age: person.age }))
const peopleWithId = people.map(person => {
    const newObj = { ...person }
    newObj.id = Math.floor(Math.random() * 100)
    return newObj
})
console.log(names)
console.log(peopleWithoutName)
console.log(peopleWithId)
