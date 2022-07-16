let num1 = 1.242

// Arredondando o número para baixo
let num2 = Math.floor(num1)
console.log(num2)

// Arredondando o número para cima
let num3 = Math.ceil(num1)
console.log(num3)

// Arredondando o número para o valor mais próximo
let num4 = Math.round(num1)
console.log(num4)

// Procurando o maior número de uma sequência
const maior = Math.max(123, 1, 2, 3, 545, 4, 3, 23, -143534)
console.log(`Maior número: ${maior}`)

// Procurando o menor número de uma sequência
const menor = Math.max(-213421, 234, 0, -122, 323)
console.log(`Menor número: ${menor}`)

// Gerando um número aleatório entre 0 e 100
// Random gera números somente entre 0 e 1, gerar entre 0 e 100, é necessário multiplicar o número por 100
const random = Math.round(Math.random() * 100)
console.log(`Número aleatório: ${random}`)

// Valor de pi
console.log(`Valor de pi ${Math.PI}`)

// Potenciação
console.log(Math.pow(2, 2)) // 2 elevado ao quadrado (2)

// Pegando a raiz quadrada de um número (sem o objeto Math)
let raiz = 9
console.log(`Raiz quadrada de ${raiz}: ${raiz ** (1 / 2)}`)
console.log(`Raiz quadrada de ${raiz}: ${raiz ** 0.5}`)

// Javascript nos permite dividir um número por 0
console.log(100 / 0) // Infinity
// Ele retorna Infinity quando não é possível adicionar casas decimais
