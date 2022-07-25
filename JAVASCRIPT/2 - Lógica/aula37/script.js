const names = ['Sidney', 'André', 'Mathias']

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}
console.log('######\n')
// for in - retorna o indice
for (let value in names) {
    console.log(names[value])
}
console.log('######\n')

// for of - retorna os valores dos indices (funciona com iteráveis: arrays ou strings)
for (let value of names) {
    console.log(value)
}
console.log('######\n')

names.forEach((element, index, array) => console.log(element, index, array))
