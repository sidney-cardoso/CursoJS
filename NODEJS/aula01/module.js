// const name = 'Sidney'
// const surname = 'Cardoso'
//
// const fullName = () => `${name} ${surname}`

/* 
module.exports.name = name
module.exports.surname = surname
module.exports.fullName = fullName
*/

/* exports.name = name
exports.surname = surname
exports.fullName = fullName
this.age = 17

// console.log(module.exports)
 */

class Person {
    constructor(name) {
        this.name = name
    }
}
exports.Person = Person
