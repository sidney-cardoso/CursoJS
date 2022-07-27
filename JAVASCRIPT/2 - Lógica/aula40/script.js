// ---------------------------------- BREAK E CONTINUE ---------------------------------- //

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/* 
for (number of numbers) {
    if (number === 2) {
        console.log('Número 2 foi pulado')
        continue
    }
    console.log(number)
    if (number === 5) {
        console.log('Número 5 foi pulado, encerrando o loop...')
        break
    }
}
 */

/* 
for (i in numbers) {
    let number = numbers[i]
    if (number === 2) {
        console.log('Número 2 foi pulado')
        continue
    }
    console.log(number)
    if (number === 5) {
        console.log('Número 5 foi pulado, encerrando o loop...')
        break
    }
}
 */
/* 
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i]
    if (number === 2) {
        console.log('Número 2 foi pulado')
        continue
    }
    console.log(number)
    if (number === 5) {
        console.log('Número 5 foi pulado, encerrando o loop...')
        break
    }
}
 */

let i = 0
/* while (i < numbers.length) {
    let number = numbers[i]
    if (number === 2) {
        console.log('Número 2 foi pulado')
        i++
        continue
    }
    console.log(number)
    if (number === 5) {
        console.log('Número 5 foi pulado, encerrando o loop...')
        i++
        break
    }
    i++
} */
do {
    let number = numbers[i]
    if (number === 2) {
        console.log('Número 2 foi pulado')
        i++
        continue
    }
    console.log(number)
    if (number === 5) {
        console.log('Número 5 foi pulado, encerrando o loop...')
        i++
        break
    }
    i++
} while (i < numbers.length)
