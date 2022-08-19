// ------------------------------------- REDUCE ------------------------------------- //

// reduce - reduz um array em um único valor.

const numbers = [5, 1, 4, 2, 6, 13, 76, 12, 54]

// const sum = numbers.reduce((acumulador, valor, indice, array))

// Some todos os números (reduce)
// Retorne um array com pares (filter)
// Retorne um array com o dobro dos valores (map)

const sum = numbers.reduce((acumulador, valor) => {
    // if (valor % 2 === 0) acumulador.push(valor)
    acumulador.push(valor * 2)
    // acumulador += valor
    return acumulador
}, [])

console.log(sum)

const people = [
    { name: 'Pedro', age: 14 },
    { name: 'João', age: 48 },
    { name: 'Paula', age: 23 },
    { name: 'Artur', age: 19 },
    { name: 'Sofia', age: 17 },
    { name: 'Rafael', age: 32 },
    { name: 'Miguel', age: 95 },
    { name: 'Maria', age: 19 }
]
// Retorne a pessoa mais velha

const older = people.reduce((acumulador, valor) => {
    return acumulador.age > valor.age ? acumulador : valor
}, 0)
const {name, age} = older
console.log(`A pessoa mais velha é ${name} e tem ${age} anos.`)
