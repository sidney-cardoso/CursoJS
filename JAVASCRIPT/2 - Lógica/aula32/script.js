// ----------------------------------- ATRIBUIÇÃO VIA DESESTRUTURAÇÃO ( ARRAYS ) ----------------------------------- //
const numbers = [1000, 2000, 3000, 4000, 5000]
const firstNumber = numbers[0]

// const [firstNumber2, secondNumber, thirdNumber, ...rest] = numbers
// console.log(firstNumber2, secondNumber, thirdNumber)
const [firstNumber2, , thirdNumber, ...rest] = numbers // Pulando números do array

console.log(firstNumber2, thirdNumber)

console.log(rest)


// Demonstrando a complexidade de desestruturação de arrays em alguns casos
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// const [, [, third]] = matrix
// console.log(third)
console.log(matrix[0][0]) // Maneira bem mais simples