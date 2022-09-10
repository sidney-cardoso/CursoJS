const persons = [
    { id: 3, name: 'Sidney' },
    { id: 2, name: 'Lúcia' },
    { id: 1, name: 'Raimundo' }
]

/*
const newPersons = {}

for (const person of persons) {
    const { id } = person
    newPersons[id] = { ...person }
}
*/
const newPersons = new Map()

for (const person of persons) {
    const { id } = person
    newPersons.set(id, { ...person })
}
for (const [identifier, { id, name }] of newPersons) {
    console.log(identifier, id, name)
}
/* 
console.log(newPersons)
console.log(newPersons.get(3)) */
