// Escreva uma função que recebe um número e retorne o seguinte:
// Se o número for divisível por 3, retorne Fizz
// Se o número for divisível por 5, retorne Buzz
// Se o número for divisível por 3 e 5, retorne FizzBuzz
// Se não for divisível por 3 nem por 5, retorne o número
// Checar se realmente é um número
// Use a função com números de 0 a 100

const fizzBuzz = num => {
    num = Number(num)
    if (!num) return 'Não é um número!'
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'

    if (num % 3 === 0) return 'Fizz'

    if (num % 5 === 0) return 'Buzz'

    return num
}
let i = 0
do {
    console.log(`${i} - ${fizzBuzz(i)}`)
    i++
} while (i <= 100)
