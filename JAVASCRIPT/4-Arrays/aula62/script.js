// const names = ['João', 'Pedro', 'Maria', 'José']

const names = new Array('João', 'Pedro', 'Maria', 'José', 'Fernando', 'Mariana')

const newArray = [...names]
const new2 = newArray.slice(0, 3) // [0, 1, 2], o ultimo indice não é incluído
console.log(`Array fatiado: ${new2} `)

const removed = newArray.pop() // remove o último elemento do array
newArray.shift() // remove o primeiro elemento do array
newArray.unshift('Sílvio') //adiciona um elemento no primeiro ind o primeiro elemento do array

names.push('Marcia') // adiciona um elemento no final do array'
// names[2] = 'Joana'
// delete names[0] // [ <1 empty item>, 'Pedro', 'Joana', 'José' ]
console.log(names)
console.log(newArray, removed)
console.log(names.length)

const name = 'Sidney Cardoso Rodrigues'
const name2 = ['Sidney', 'Cardoso', 'Rodrigues']
console.log(name.split(' ')) // ['Sidney', 'Cardoso', 'Rodrigues']

console.log(name2.join(' ')) // Sidney Cardoso Rodrigues
