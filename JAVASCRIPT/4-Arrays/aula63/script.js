// --------------------------------------------- SPLICE --------------------------------------------- //

const names = ['João', 'Pedro', 'Maria', 'José', 'Paulo']

// names.splice(2, 0, 'José', 'Paulo')
// names.splice(indice, delete, element1, element2, ...)
// names.splice(4, 1)
// const removed = names.splice(4, Number.MAX_VALUE) // do indice4 até o maior numero possível
const removed = names.splice(4, 1, 'Sidney', 'Luiz') // do indice4 até o maior numero possível
console.log(names, removed)

// pop
// names.splice(-1, 1)

// shift
// names.splice(0, 1)

// push
// names.splice(names.length , 0, 'Sidney')

// unshift
// names.splice(0, 0, 'Sidney')
