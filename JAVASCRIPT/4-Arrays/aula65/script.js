// --------------------------------------------- FILTER --------------------------------------------- //
// FILTER - Filtra o array de acordo com o critério passado por parâmetro.

// Retorne os números maiores que 10

const numbers = [
    5, 9, 3, 7, 2, 11, 15, 6, 8, 10, 1, 4, 12, 13, 14, 16, 17, 18, 19, 20
]
const filtered = numbers.filter(number => number > 10)
console.log(filtered)

// Retorne as pessoas que tem o nome com 5 caracteres ou mais.
// Retorne as pessoas com mais de 20 anos.
// Retorne as pessoas cujo nome termina com a letra "a".

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

const filteredPeople = people.filter(person => person.name.length > 5)
console.log(filteredPeople)

const filteredPeople2 = people.filter(person => person.age > 20)
console.log(filteredPeople2)

const filteredPeople3 = people.filter(person => person.name.toLowerCase().endsWith('a'))
console.log(filteredPeople3)

const filteredPeople4 = people
    .filter(person => person.name.length >= 5)
    .filter(person => person.age > 10)
    .filter(person => person.name.toLowerCase().endsWith('a'))
console.log(`${filteredPeople4.length} pessoas foram filtradas.`)
