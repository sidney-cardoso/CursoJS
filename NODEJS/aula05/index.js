const path = require('path')
const jsonPersons = path.resolve(__dirname, 'persons.json')
const writeFile = require('./modules/writeFile')
const readFile = require('./modules/readFile')
/* 
const persons = [
    { name: 'Sidney', surname: 'Cardoso' },
    { name: 'Ana', surname: 'Carvalho' },
    { name: 'Otávio', surname: 'Sousa' },
    { name: 'Luiz', surname: 'Fábio' }
]
const json = JSON.stringify(persons, '', 4)
writeFile(jsonPersons, json)
 */

/* const read = async directory => {
    const data = await readFile(directory)
    return data
} */
const read = async directory => {
    const data = await readFile(directory)
    renderData(data)
}

const renderData = data => {
    data = JSON.parse(data)
    data.forEach(value => console.log(value))
}
read(jsonPersons)
