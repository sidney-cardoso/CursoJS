// Valores Primitivos e Valores por Referência

// Primitivos (imutáveis): string, number, boolean, null, undefined, (bigint, symbol) - Valores copiados
let name = 'John Doe' // Não estamos mudando o tipo da variável, somente o valor
name = 'Bob Doe'
// Essa string é imutável,
// Não é possível fazermos isso:
name[0] = 'R'
console.log(name[0], name)

// Referência (mutáveis): object, array, function - passados por referência

let a = [1, 2, 3]
let b = [...a] // Copia os valores de ( a ) mas se torna independente de ( a )
console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(b)

const x = { name: 'John', lastName: 'Doe' }
const y = { ...x }

x.name = 'Bob'
console.log(x, y)
