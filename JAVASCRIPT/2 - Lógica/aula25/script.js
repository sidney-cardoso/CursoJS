const number = 10

if (number >= 0 && number <= 10) {
    console.log('O número está entre 0 e 10')
} else if (number >= 11 && number <= 20) {
    console.log('O número está entre 11 e 20')
} else if (number >= 21 && number <= 30) {
    console.log('O número está entre 21 e 30')
} else {
    console.log('O número não está entre 0 e 30')
}
console.log('O número está entre 0 e 30') // Essa linha é executada mesmo que nenhuma das condições acima seja verdadeira


