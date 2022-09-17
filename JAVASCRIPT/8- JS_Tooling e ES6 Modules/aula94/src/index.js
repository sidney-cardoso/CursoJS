// import Person, { surname, age, sum } from './module1'
import * as module from './module1'
import func from './module1'
// Quando importamos sem chave, nós estamos importando o default
console.log(module)
console.log(func(5, 5))


// import { name as name2 } from './module1' // Alterando o nome de uma variável na importação

// const p1 = new Person(name2, surname, age)
