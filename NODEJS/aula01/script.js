/* const module1 = require('./module')
// const fullName = module1.fullName
// const module2 = require('./module').fullName // Importando uma chave especifica

const { name, surname, fullName } = require('./module')

console.log(module1)
console.log(fullName())
 */


const { Person } = require('./module')
const person1 = new Person('Sidney')
console.log(person1)

const axios = require('axios') // Importando sem a necessidade de definir um caminho
const path = require('path')
const url = 'https://www.otaviomiranda.com.br/files/json/pessoas.json'
axios(url)
    .then(response => console.log(response.data))
    .catch(error => console.error(error))
