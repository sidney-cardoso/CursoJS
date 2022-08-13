// --------------------------------------- Constructor Function --------------------------------------- //

const Person = function (name, middleName) {
    // id e a função não estarão disponíveis fora do escopo da função construtora
    // Atributos ou métodos privados
    const id = 1222334456
    const internalFunction = () => {
        console.log(`${name} ${middleName}`)
    }
    // Atributos ou métodos públicos
    this.name = name
    this.middleName = middleName
    this.method = () => {
        console.log(`My name is ${this.name} ${this.middleName}`)
    }
}

const person = new Person('João', 'Silva')
const person2 = new Person('Maria', 'Silva')

console.log(person)
person.method()
person2.method()
