// ----------------------------- FILTER + MAP + REDUCE ----------------------------- //

const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30,
    40, 50, 60, 70, 80, 90, 100
]

// Retorna a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (Somar tudo)
const even = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2)
    .reduce((acc, number) => acc + number)

console.log(even)
