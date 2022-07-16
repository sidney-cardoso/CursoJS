const names = ['Luiz', 'Maria']
// Alterando um indice
names[0] = 'Mariana'

// Adicionando um elemento no array
/* names[5] = 'Otávio' 
names[names.length] = "Sidney"
names[names.length] = "Lucas"
 */
// Uma maneira mais fácil e recomendada de adicionar elementos:
names.push('Sidney') // Adiciona um elemento no final do array
names.unshift('Lucas') // Adiciona um elemento no começo do array
names.push('Marcos')
names.push('Otávio')
// Removendo elementos do array
names.pop() // Remove um elemento do final do array
names.shift() // Remove um elemento do inicio do array

// Deletando elemento sem alterar os indices do array
delete names[1] // Ficará com um indice vazio

// Fatiando um array

console.log(names.slice(0, -2))

console.log(names)
// Verificando o tamanho de um array

console.log(names.length)

// Verificando se é um array
console.log(typeof names) // arrays são considerados objetos

console.log(names instanceof Array)
