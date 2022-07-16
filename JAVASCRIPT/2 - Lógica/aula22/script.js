// ------------------------------------ OPERADORES LÓGICOS ------------------------------------ //

/**
 * && -> AND -> E -> Se as condições forem verdadeiras, o resultado será verdadeiro.
 * || -> OR -> OU -> Se uma das condições for verdadeira, o resultado será verdadeiro.
 * ! -> NOT -> NÃO -> Se a condição for falsa, o resultado será verdadeiro.
 */

const and = true && true && true && false
console.log(and)

const or = true || false
console.log(or)

const user = 'admin'
const password = '123456'

const isAdmin = user === 'admin' && password === '123456'
const isNotAdmin = user !== 'admin' || password === '123456'
console.log(`Is admin: ${isAdmin}`)
console.log(`Is not admin: ${isNotAdmin}`)

console.log(!false) // true
console.log(!true) // false
console.log(!!true) // true
