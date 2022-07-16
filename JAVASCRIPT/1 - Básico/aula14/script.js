let number1 = 10
let number2 = 2.5

// Alterando os valores para string temporariamente:
console.log(number1.toString() + number2.toString())

// Representação binária de um número
console.log(number2.toString(2))

// Diminuindo a quantidade de casas decimais
let value = 213.3213423
console.log(value.toFixed(2))

// Verificando se um número é inteiro
console.log(Number.isInteger(value))

// Verificando se é NaN

let nan = number1 * 'String'
console.log(Number.isNaN(nan))

// IEEE 654-2008
let num1 = 0.7
let num2 = 0.1

num1 += num2
num1 += num2
num1 += num2 // Ele retornará o valor 0.99999999999 e não 1, para corrigir isso, basta fazer:

num1 = Number(num1.toFixed(2))
console.log(num1)
console.log(Number.isInteger(num1)) // Verificando se é um inteiro
