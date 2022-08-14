// ------------------------------------------ CONCATENAÇÃO DE ARRAYS ------------------------------------------ //

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const arrayConcat = array1.concat(array2, [7, 8, 9], 'String', true)

// spread operator
const arrayConcat2 = [...array1, ...array2, 7, 8, 9, ...[10, 11, 12], 'String', true]
console.log(arrayConcat)
console.log(arrayConcat2)
console.log(typeof arrayConcat2)
