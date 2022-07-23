// ------------------------------------------------------------- FOR ------------------------------------------------------------- //

/* 
console.log('linha 0')
console.log('linha 1')
console.log('linha 2')
console.log('linha 3')
console.log('linha 4')
console.log('linha 5')
 */
/* 
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`)
}

 */

// Par ou ímpar
for (let i = 0; i <= 10; i++) {
    const result = i % 2 === 0 ? `${i} é par` : `${i} é ímpar`
    console.log(result)
}

const fruits = [
    'Lemon',
    'Banana',
    'Papaya',
    'Apple',
    'Mango',
    'Orange',
    'Grape',
    'Pineapple'
]
for (let i = 0; i < fruits.length; i++) {
    console.log(`Índice ${i}:`, fruits[i])
}
