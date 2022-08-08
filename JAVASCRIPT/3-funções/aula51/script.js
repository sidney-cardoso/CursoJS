// // ----------------------------------------- RETURN ----------------------------------------- //
// // Retorna algo e encerra a função.
// // Exemplo:
// function soma(a, b) {
//     return a + b
// }
// let result = soma(2, 3)

// console.log(result)

// function createPerson(name, middleName, lastName) {
//     return {
//         name,
//         middleName,
//         lastName
//     }
// }

// let person = createPerson('João', 'Santos', 'Silva')
// let person1 = {
//     name: 'Maria',
//     middleName: 'Santos',
//     lastName: 'Silva'
// }
// console.log(person)
// console.log(person1)

// function writePhrase(phrase) {
//     function writeAnything(anything) {
//         return `${phrase} ${anything}`
//     }
//     return writeAnything
// }

// const phrase = writePhrase('Javascript is')

// console.log(phrase('awesome'))
function createMultiplier(multiplier) {
    return number => number * multiplier
}
const double = createMultiplier(2)
const triple = createMultiplier(3)
const quadruple = createMultiplier(4)

console.log(double(3))

console.log(triple(3))

console.log(quadruple(3))


