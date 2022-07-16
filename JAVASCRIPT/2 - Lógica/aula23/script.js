/**
 * && -> false && true -> false "o valor mesmo"
 * || -> true || false  -> true "o valor mesmo"
 *
 * FALSY VALUES:
 * false -> literal false
 * 0
 * "" '' ``
 * null
 * undefined
 * NaN
 *
 *  Qualquer valor que seja diferente de falsy, é true
 */

console.log('1' && '' && '2') // ''

function sayHello() {
    return 'Hello'
}
const execute = 'ABCD'
console.log(execute && sayHello()) // ''

console.log(0 || null || 'Sidney' || true || false)
