// ------------------ OPERADORES ARITMÉTICOS, DE ATRIBUIÇÃO E DE INCREMENTO ------------------ //

// ------------------------------------- ARITMÉTICOS ------------------------------------- //
/**
 * Adição/concatenação ( + )
 * Subtração ( - )
 * Divisão ( / )
 * Multiplicação ( * )
 * Potenciação ( ** )
 * Resto da divisão ( % )
 */
// Ordem de precedência
/**
() 
**
/ * %
+ -
*/

const num1 = 15
const num2 = 10
const num3 = '35'
/* 
console.log(num1 + num2)
console.log(num1 + num3)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 ** num2)
console.log(num1 % num2)
console.log((10 + 10) * 10)
 */

// ------------------------------------- INCREMENTO/DECREMENTO ------------------------------------- //
let contador = 0
contador++
console.log(contador)
contador--
console.log(contador)

// ------------------------------------- ATRIBUIÇÃO ------------------------------------- //

let passos = 5
contador += passos
console.log(contador)

contador *= passos
console.log(contador)

contador /= passos
console.log(contador)

contador **= passos
console.log(contador)

contador %= passos
console.log(contador)

// NaN - Not a Number

let a = 10
let b = 'ABCD'
console.log(a * b)

let c = 10
// convertendo uma string para number
// parseInt - converte para inteiros, parseFloat converte para number com casas decimais, Number converte para numero e já defini automaticamente se é inteiro ou decimal

let d = parseInt('10')
let e = parseFloat('10.8')
let f = parseFloat('10.8')
let g = Number('10.8')
console.log(c + d)
console.log(typeof d)
