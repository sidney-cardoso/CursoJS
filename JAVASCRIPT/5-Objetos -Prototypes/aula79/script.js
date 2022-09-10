// -------------------------------- FACTORY FUNCTIONS + PROTOTYPES -------------------------------- //

const fullName = {
    fullName() {
        console.log(`Nome: ${this.name}, Sobrenome: ${this.middlename}`)
    }
}
const firstName = {
    firstName() {
        console.log(`Nome: ${this.name}`)
    }
}
const middlename = {
    middlename() {
        console.log(`Sobrenome: ${this.middlename}`)
    }
}
// const prototypePerson = { ...firstName, ...middlename, ...fullName } // Fazendo cópia
const prototypePerson = Object.assign({}, fullName, firstName, middlename)

function createPerson(name, middlename) {
    return Object.create(prototypePerson, {
        name: { value: name },
        middlename: { value: middlename }
    })
}

const person = createPerson('Sidney', 'Cardoso')
console.log(person)
